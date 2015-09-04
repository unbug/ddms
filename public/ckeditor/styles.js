/**
 * Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin, which shows a combo
// in the editor toolbar, containing all styles. Other plugins instead, like
// the div plugin, use a subset of the styles on their feature.
//
// If you don't have plugins that depend on this file, you can simply ignore it.
// Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.

var config = [
  /* Block Styles */

  // These styles are already available in the "Format" combo ("format" plugin),
  // so they are not needed here by default. You may enable them to avoid
  // placing the "Format" combo in the toolbar, maintaining the same features.
  /*
   { name: 'Paragraph',		element: 'p' },
   { name: 'Heading 1',		element: 'h1' },
   { name: 'Heading 2',		element: 'h2' },
   { name: 'Heading 3',		element: 'h3' },
   { name: 'Heading 4',		element: 'h4' },
   { name: 'Heading 5',		element: 'h5' },
   { name: 'Heading 6',		element: 'h6' },
   { name: 'Preformatted Text',element: 'pre' },
   { name: 'Address',			element: 'address' },
   */

  { name: 'Italic Title',		element: 'h2', styles: { 'font-style': 'italic' } },
  { name: 'Subtitle',			element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' } },
  {
    name: 'Special Container',
    element: 'div',
    styles: {
      padding: '5px 10px',
      background: '#eee',
      border: '1px solid #ccc'
    }
  },

  /* Inline Styles */

  // These are core styles available as toolbar buttons. You may opt enabling
  // some of them in the Styles combo, removing them from the toolbar.
  // (This requires the "stylescombo" plugin)
  /*
   { name: 'Strong',			element: 'strong', overrides: 'b' },
   { name: 'Emphasis',			element: 'em'	, overrides: 'i' },
   { name: 'Underline',		element: 'u' },
   { name: 'Strikethrough',	element: 'strike' },
   { name: 'Subscript',		element: 'sub' },
   { name: 'Superscript',		element: 'sup' },
   */

  { name: 'Marker',			element: 'span', attributes: { 'class': 'marker' } },

  { name: 'Big',				element: 'big' },
  { name: 'Small',			element: 'small' },
  { name: 'Typewriter',		element: 'tt' },

  { name: 'Computer Code',	element: 'code' },
  { name: 'Keyboard Phrase',	element: 'kbd' },
  { name: 'Sample Text',		element: 'samp' },
  { name: 'Variable',			element: 'var' },

  { name: 'Deleted Text',		element: 'del' },
  { name: 'Inserted Text',	element: 'ins' },

  { name: 'Cited Work',		element: 'cite' },
  { name: 'Inline Quotation',	element: 'q' },

  { name: 'Language: RTL',	element: 'span', attributes: { 'dir': 'rtl' } },
  { name: 'Language: LTR',	element: 'span', attributes: { 'dir': 'ltr' } },
  /* Object Styles */

  {
    name: 'Styled image (left)',
    element: 'img',
    attributes: { 'class': 'left' }
  },

  {
    name: 'Styled image (right)',
    element: 'img',
    attributes: { 'class': 'right' }
  },

  {
    name: 'Compact table',
    element: 'table',
    attributes: {
      cellpadding: '5',
      cellspacing: '0',
      border: '1',
      bordercolor: '#ccc'
    },
    styles: {
      'border-collapse': 'collapse'
    }
  }

];
var anims = ["callout.bounce", "callout.shake", "callout.flash", "callout.pulse", "callout.swing", "callout.tada",
  "transition.fadeIn", "transition.fadeOut",
  "transition.flipXIn", "transition.flipXOut", "transition.flipYIn", "transition.flipYOut",
  "transition.flipBounceXIn", "transition.flipBounceXOut", "transition.flipBounceYIn", "transition.flipBounceYOut",
  "transition.swoopIn", "transition.swoopOut",
  "transition.whirlIn", "transition.whirlOut",
  "transition.shrinkIn", "transition.shrinkOut",
  "transition.expandIn", "transition.expandOut",
  "transition.bounceIn", "transition.bounceOut", "transition.bounceUpIn", "transition.bounceUpOut", "transition.bounceDownIn", "transition.bounceDownOut", "transition.bounceLeftIn", "transition.bounceLeftOut", "transition.bounceRightIn", "transition.bounceRightOut",
  "transition.slideUpIn", "transition.slideUpOut", "transition.slideDownIn", "transition.slideDownOut", "transition.slideLeftIn", "transition.slideLeftOut", "transition.slideRightIn", "transition.slideRightOut", "transition.slideUpBigIn", "transition.slideUpBigOut", "transition.slideDownBigIn", "transition.slideDownBigOut", "transition.slideLeftBigIn", "transition.slideLeftBigOut", "transition.slideRightBigIn", "transition.slideRightBigOut",
  "transition.perspectiveUpIn", "transition.perspectiveUpOut", "transition.perspectiveDownIn", "transition.perspectiveDownOut", "transition.perspectiveLeftIn", "transition.perspectiveLeftOut", "transition.perspectiveRightIn", "transition.perspectiveRightOut"];
var offsets = ['30%','50%','70%','90%'];
config.push( { name: 'Animation.none', element: 'p', attributes: { 'data-velocity-effect': 'none' } } );
anims.forEach(function(akey){
  config.push( { name: akey, element: 'p', attributes: { 'data-velocity-effect': akey,'data-velocity-offset': 'default' } } );
  offsets.forEach(function(okey){
    config.push( { name: akey+'-offset'+okey, element: 'p', attributes: { 'data-velocity-effect': akey ,'data-velocity-offset': okey} } );
  });
});
CKEDITOR.stylesSet.add( 'default',  config);

