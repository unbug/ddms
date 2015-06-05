;(function() {
var util_RequestAnimationFrame, core_LocalStorage, core_Navigator, core_Subject, core_Class, core_Pubsub, core_Event, util_LocalHost, util_LocalParam, util_RequestHandler, util_RandomList, util_DateHandler, lib_Corestandalonejs;
(function () {
  util_RequestAnimationFrame = function (exports) {
    //http://notes.jetienne.com/2011/05/18/cancelRequestAnimFrame-for-paul-irish-requestAnimFrame.html
    window.cancelRequestAnimFrame = function () {
      return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || clearTimeout;
    }();
    window.requestAnimFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback, element) {
        return window.setTimeout(callback, 1000 / 60);
      };
    }();
    return exports;
  }({});
  core_LocalStorage = function (exports) {
    function localStorage() {
      var lcst = window.localStorage;
      /**
       * 读取
       * 
       * @method getLocalValue
       * @param {String} id item id
       * @return {String} value
       */
      function getLocalValue(id) {
        if (lcst) {
          return lcst[id];
        } else {
          return null;
        }
      }
      /**
       * 保存/更新
       * 
       * @method setLocalValue
       * @param {String}|{Object} id item id
       * @param {String} val value
       */
      function setLocalValue(id, val) {
        if (lcst) {
          if (typeof id === 'object') {
            for (var key in id) {
              id[key] && lcst.setItem(key, id[key]);
            }
          } else {
            lcst.setItem(id, val);
          }
        }
        return this;
      }
      /**
       * 删除
       * @param {Array}||{String} id
       */
      function removeLocalValue(id) {
        if (lcst) {
          if (typeof id === 'object') {
            for (var key in id) {
              lcst.removeItem(id[key]);
            }
          } else {
            lcst.removeItem(id);
          }
        }
        return this;
      }
      this.set = setLocalValue;
      this.get = getLocalValue;
      this.del = removeLocalValue;
    }
    return new localStorage();
  }({});
  core_Navigator = function (exports) {
    var Navigator = function () {
      var frame, androidReg = /Android/gi, isAndroid = androidReg.test(navigator.platform) || androidReg.test(navigator.userAgent);
      /**
       * iframe 元素
       *
       * @property {Element} frame
       */
      frame = null;
      /**
       * append iframe
       *
       * @param frame
       */
      function appendFrame(frame) {
        frame && document.body.appendChild(frame);
      }
      /**
       * 删除iframe
       *
       * @method removeFrame
       * @param {Element} frame 执行的方法
       */
      function removeFrame(frame) {
        frame && frame.parentNode.removeChild(frame);
      }
      /**
       * 创建iframe,帮助解决iOS的UIWebView没有JS API
       *
       * @method getFrame
       * @return {Element} iframe
       */
      function getFrame(src) {
        var _frame = document.createElement('iframe');
        _frame.setAttribute('style', 'display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;');
        _frame.setAttribute('height', '0px');
        _frame.setAttribute('width', '0px');
        _frame.setAttribute('frameborder', '0');
        if (src) {
          _frame.setAttribute('src', src);
        } else {
          appendFrame(_frame);
        }
        return _frame;
      }
      /**
       * 执行与客户端交互方法的命令
       *
       * @method excute
       * @param {String} ns 与客户端交互的协议server/类Class
       * @param {String} fn 执行的方法
       * @param {Object} option 参数
       * @param {boolean} single 是否是使用独立的iframe,默认false
       * @param {boolean} noframe 是否不通过iframe,默认false
       */
      function excute(ns, fn, option, single, noframe) {
        var data, command;
        data = option ? JSON.stringify(option) : '';
        //将JSON转换成字符串
        if (ns && typeof ns == 'object' && ns[fn]) {
          //android
          ns[fn](data);
        } else {
          //iOS
          command = ns;
          if (typeof fn == 'string' && fn.length > 0) {
            command += fn + '/' + data;
          }
          protocol(command, single, noframe);
        }
      }
      /**
       * 执行与客户端交互的协议
       *
       * @method protocol
       * @param {String} command 执行的协议及命令
       * @param {boolean} single 是否是使用独立的iframe,默认false
       * @param {boolean} noframe 是否不通过iframe,默认false
       */
      function protocol(command, single, noframe) {
        var _frame, timer;
        //不通过iframe
        if (noframe) {
          window.location.href = command;
          return;
        }
        //通过iframe
        if (single) {
          if (isAndroid) {
            _frame = getFrame();
            _frame.setAttribute('src', command);
          } else {
            _frame = getFrame(command);
            appendFrame(_frame);
          }
          timer = setTimeout(function () {
            _frame && removeFrame(_frame);
          }, 30000);
          _frame.onload = _frame.onreadystatechange = function () {
            timer && clearTimeout(timer);
            _frame && removeFrame(_frame);
          };
        } else {
          frame = frame || getFrame();
          frame.setAttribute('src', command);
        }
      }
      return {
        protocol: protocol,
        excute: excute
      };
    }();
    //end Object Navigator
    return Navigator;
  }({});
  core_Subject = function (exports) {
    function Subject(subject) {
      this._subject = subject;
      this.observers = [];
    }
    Subject.prototype = {
      /**
       * @param {Function}|{Boject} observer
       */
      register: function (observer) {
        if (!observer) {
          throw new Error('An observer can not be undefined!');
        } else if (typeof observer === 'object' && typeof observer.update !== 'function') {
          throw {
            name: 'Error',
            method: 'Subject.register',
            message: 'An observer object can not register without an update method!'
          };
        }
        this.unregister(observer);
        //防止重复注册
        this.observers.push(observer);
        return this;
      },
      /**
       * @param {Function}|{Boject} observer
       */
      unregister: function (observer) {
        this.observers = this.observers.filter(function (obsv) {
          if (obsv !== observer) {
            return obsv;
          }
        });
        return this;
      },
      notify: function () {
        var args = [].slice.call(arguments);
        this.observers.forEach(function (obsv) {
          if (typeof obsv === 'function') {
            obsv.apply(obsv, args);
          } else {
            obsv.update.apply(obsv, args);
          }
        });
        return this;
      }
    };
    return Subject;
  }({});
  core_Class = function (exports) {
    var Subject = core_Subject;
    var Class = {};
    function apply(obj, config, promise) {
      if (config) {
        var attr;
        for (attr in config) {
          obj[attr] = promise ? promise(config[attr]) : config[attr];
        }
      }
    }
    function applyIf(obj, config, promise) {
      if (config) {
        var attr;
        for (attr in config) {
          if (!obj[attr]) {
            obj[attr] = promise ? promise(config[attr]) : config[attr];
          }
        }
      }
    }
    Class.apply = apply;
    function extend() {
      var F = function () {
      };
      return function (superClass, subClass) {
        F.prototype = superClass.prototype;
        subClass.prototype = new F();
        //空函数避免创建超类的新实例(超类可能较庞大或有大量计算)
        subClass.prototype.constructor = subClass;
        subClass.superclass = superClass.prototype;
        //superclass减少子类与超类之间的偶合
        //http://stackoverflow.com/questions/12691020/why-javascripts-extend-function-has-to-set-objects-prototypes-constructor-pro
        if (superClass.prototype.constructor == Object.prototype.constructor) {
          superClass.prototype.constructor = superClass;
        }
        return subClass;
      };
    }
    Class.extend = extend();
    /**
     *
     * Model
     *
     *
     * Nested Model:
     * e.g.
     *    var testModel = new Model({
     *           store: new Model({
     *               request: function(){
     *                   console.log('store.request',this);
     *               }
     *           }),
     *           request: function(){
     *               console.log('request',this);
     *           }
     *       });
     *
     *    testModel.updated(function(){
     *           console.log(testModel.get());
     *           testModel.request();
     *       });
     *    testModel.set('1');
     *
     *    testModel.store.updated(function(){
     *           console.log(testModel.store.get());
     *           testModel.store.request();
     *       });
     *    testModel.store.set('2');
     */
    function Model(option) {
      Model.superclass.constructor.call(this);
      this.updated = this.register;
      this.refresh = this.notify;
      this.data;
      if (option) {
        var attr;
        for (attr in option) {
          this[attr] = option[attr];
        }
      }
      //数据缓存更新
      this.updateFactory = function () {
        var lastUpdate = 0, _timeout = 1000 * 60 * 5;
        /**
         *
         * @param timeout 时间倍数，默认是1
         * @returns {boolean}
         */
        this.isTimeout = function (timeout) {
          timeout = _timeout * (timeout || 1);
          return !lastUpdate || new Date().getTime() - lastUpdate > timeout;
        };
        this.update = function () {
          lastUpdate = new Date().getTime();
        };
        this.reset = function () {
          lastUpdate = 0;
        }  //end 数据缓存更新
;
      };
      this.timer = new this.updateFactory();
    }
    Class.extend(Subject, Model);
    Model.prototype.set = function (data) {
      this.data = data;
      this.refresh();
      this.timer.update();
    };
    Model.prototype.get = function () {
      return this.data;
    };
    Class.Model = Model;
    return Class;
  }({});
  core_Pubsub = function (exports) {
    function Pubsub(Subject) {
      var topics = {};
      function subscribe(topic, observer) {
        var subject;
        for (var key in topics) {
          if (key === topic) {
            subject = topics[key];
            break;
          }
        }
        if (!subject) {
          subject = new Subject();
          addTopic(topic, subject);
        }
        subject.register(observer);
        return this;
      }
      function unsubscribe(topic) {
        removeTopic(topic);
        return this;
      }
      function publish(topic) {
        var args = [].slice.call(arguments);
        topics[topic] && topics[topic].notify.apply(topics[topic], args.slice(1));
        return this;
      }
      function addTopic(topic, subject) {
        topics[topic] = subject;
      }
      function removeTopic(topic) {
        delete topics[topic];
      }
      function getTopics() {
        var _topics = [];
        for (var key in topics) {
          typeof key === 'string' && _topics.push(key);
        }
        return _topics;
      }
      this.getTopics = getTopics;
      this.subscribe = subscribe;
      this.unsubscribe = unsubscribe;
      this.publish = publish;
    }
    return Pubsub;
  }({});
  core_Event = function (exports) {
    var Class = core_Class;
    var Pubsub = core_Pubsub;
    var Subject = core_Subject;
    function Event(Subject) {
      Event.superclass.constructor.call(this, Subject);
      this.on = this.subscribe;
      this.off = this.unsubscribe;
      this.trigger = this.publish;
    }
    Class.extend(Pubsub, Event);
    return new Event(Subject);
  }({});
  util_LocalHost = function (exports) {
    if (!window.location.origin) {
      window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    return window.location.origin;
  }({});
  util_LocalParam = function (exports) {
    /**
     * window.location.search
     * window.location.hash
     */
    function localParam(search, hash) {
      search = search || window.location.search;
      hash = hash || window.location.hash;
      var fn = function (str, reg) {
        if (str) {
          var data = {};
          str.replace(reg, function ($0, $1, $2, $3) {
            data[$1] = $3;
          });
          return data;
        }
      };
      return {
        search: fn(search, new RegExp('([^?=&]+)(=([^&]*))?', 'g')) || {},
        hash: fn(hash, new RegExp('([^#=&]+)(=([^&]*))?', 'g')) || {}
      };
    }
    return localParam;
  }({});
  util_RequestHandler = function (exports) {
    var RequestHandler = function () {
      /**
       * AJAX管理器
       * 
       * @param Object option
       * option:{
       *  type : String 请求类型POST/GET
       *  dataType : String 数据解析类型
       *  action :String 请求action
       *  data : Object 请求参数
       *  complete :Function 完毕回调方法
       * }
       * @method AJAXHandler
       */
      function AJAXHandler(option) {
        if (!option) {
          return;
        }
        $.ajax({
          headers: { 'cache-control': 'no-cache' },
          type: option.type,
          url: option.action,
          dataType: option.dataType,
          contentType: option.contentType,
          data: option.data || null,
          //空值设置null避免向后端发送undefined无用参数
          success: function (data, status, xhr) {
            if (option.complete && typeof option.complete === 'function') {
              option.complete({
                data: data,
                success: true
              });
            }
          },
          error: function (xhr, errorType, error) {
            if (option.complete && typeof option.complete === 'function') {
              option.complete({ success: false });
            }
          }
        });
      }
      //end AJAXHandler       
      function JSONP(option) {
        if (!option) {
          return;
        }
        $.ajax({
          type: 'GET',
          url: option.action,
          dataType: 'jsonp',
          jsonp: false,
          jsonpCallback: false,
          contentType: 'application/json'
        });
      }
      function getJSON(option) {
        if (!option) {
          return;
        }
        option.type = 'GET';
        option.dataType = 'json';
        AJAXHandler(option);
      }
      //end getJSON
      function postJSON(option) {
        if (!option) {
          return;
        }
        option.type = 'POST';
        option.dataType = 'json';
        AJAXHandler(option);
      }
      //end postJSON        
      return {
        getJSON: getJSON,
        postJSON: postJSON,
        JSONP: JSONP
      };
    }();
    return RequestHandler;
  }({});
  util_RandomList = function (exports) {
    /**
     * 随机数组
     */
    function randomList(list, len, verify, ratio) {
      var rs = [], _list = list.slice(0);
      len = len || _list.length;
      ratio = ratio ? ratio : 0;
      function rd(_array) {
        _array = _array.sort(function () {
          return 0.5 - Math.random();
        });
      }
      while (ratio) {
        rd(_list);
        ratio--;
      }
      if (_list.length <= len) {
        rs = _list;
      } else {
        while (rs.length < len) {
          var index = Math.floor(Math.random() * _list.length), item = _list[index];
          if (verify && verify.call(this, item, _list) || !verify) {
            rs.push(item);
            _list.splice(index, 1);
          }
        }
      }
      return rs;
    }
    return randomList;
  }({});
  util_DateHandler = function (exports) {
    var DateHandler = function () {
      function getStrDate(str) {
        var date;
        if (typeof str === 'string') {
          var arr = str.split(/[- :]/);
          date = new Date(arr[0], arr[1] - 1, arr[2], arr[3] || 0, arr[4] || 0, arr[5] || 0);
        }
        return date;
      }
      function dbl00(num) {
        return num < 10 ? '0' + num : num;
      }
      function getMeta(date) {
        if (!date) {
          return null;
        }
        var YYYY = date.getFullYear(), MM = date.getMonth(), DD = date.getDate(), hh = date.getHours(), mm = date.getMinutes(), ss = date.getSeconds();
        return {
          year: YYYY,
          month: dbl00(MM + 1),
          day: dbl00(DD),
          hour: dbl00(hh),
          minute: dbl00(mm),
          second: dbl00(ss)
        };
      }
      function formatStr(str) {
        var date = getStrDate(str);
        return getMeta(date);
      }
      function fromNowTo(date) {
        if (!date) {
          return null;
        }
        var _date;
        if (typeof date === 'string') {
          _date = getStrDate(date);
        } else if (typeof date === 'number') {
          _date = new Date(date);
        } else if (date.getTime) {
          _date = date;
        }
        if (!_date) {
          return null;
        }
        var old = _date.getTime(), cur = new Date().getTime(), diff = Math.abs(cur - old), day = Math.floor(diff / (24 * 60 * 60 * 1000)), hour = Math.floor((diff - day * 24 * 60 * 60 * 1000) / (60 * 60 * 1000)), minute = Math.floor((diff - hour * 60 * 60 * 1000 - day * 24 * 60 * 60 * 1000) / (60 * 1000)), second = Math.floor((diff - hour * 60 * 60 * 1000 - day * 24 * 60 * 60 * 1000 - minute * 60 * 1000) / 1000);
        return {
          day: dbl00(day),
          hour: dbl00(hour),
          minute: dbl00(minute),
          second: dbl00(second)
        };
      }
      function timeLogFromNowTo(date) {
        var _date = fromNowTo(date);
        if (!_date) {
          return null;
        }
        var day = parseInt(_date.day), hou = parseInt(_date.hour), min = parseInt(_date.minute);
        if (day > 0) {
          return day + '\u5929\u524D';
        } else if (hou > 0) {
          return hou + '\u5C0F\u65F6\u524D';
        } else if (min >= 3) {
          return min + '\u5206\u949F\u524D';
        } else {
          return '\u521A\u521A';
        }
      }
      function getDaysInMonth(y, m) {
        return /8|3|5|10/.test(--m) ? 30 : m == 1 ? !(y % 4) && y % 100 || !(y % 400) ? 29 : 28 : 31;
      }
      return {
        getStrDate: getStrDate,
        getMeta: getMeta,
        formatStr: formatStr,
        fromNowTo: fromNowTo,
        timeLogFromNowTo: timeLogFromNowTo,
        getDaysInMonth: getDaysInMonth
      };
    }();
    return DateHandler;
  }({});
  lib_Corestandalonejs = function (exports) {
    util_RequestAnimationFrame;
    var localStorage = core_LocalStorage;
    var Navigator = core_Navigator;
    var Subject = core_Subject;
    var Class = core_Class;
    var Event = core_Event;
    var LocalHost = util_LocalHost;
    var localParam = util_LocalParam;
    var RequestHandler = util_RequestHandler;
    var randomList = util_RandomList;
    var DateHandler = util_DateHandler;
    function Core() {
      var _Core = {
        localStorage: localStorage,
        localHost: LocalHost,
        localParam: localParam,
        Navigator: Navigator,
        Class: Class,
        extend: Class.extend,
        RequestHandler: RequestHandler,
        Event: Event,
        randomList: randomList,
        DateHandler: DateHandler
      };
      return _Core;
    }
    window.Core = new Core();
    return window.Core;
  }({});
}());
}());