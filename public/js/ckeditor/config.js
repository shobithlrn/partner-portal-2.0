/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    /*config.toolbar = [
        { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
        '/',
        { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
        { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
        '/',
        { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
    ];
    config.toolbarGroups = [
            { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
            { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
            { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
            { name: 'forms', groups: [ 'forms' ] },
            '/',
            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
            { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
            { name: 'links', groups: [ 'links' ] },
            { name: 'insert', groups: [ 'insert' ] },
            { name: 'styles', groups: [ 'styles' ] },
            { name: 'colors', groups: [ 'colors' ] },
            { name: 'tools', groups: [ 'tools' ] },
            { name: 'others', groups: [ 'others' ] },
            { name: 'about', groups: [ 'about' ] }
        ];*/

    config.toolbar = [
        { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline' ] },
        { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'] },
        { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
        { name: 'styles', items: ['Font', 'FontSize'] },
        { name: 'tools', items: ['placeholder_select' , 'Maximize','preview'] },
        ];
    config.removeButtons = 'Select,Button,ImageButton,HiddenField,Textarea,TextField,Radio,Form,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,BidiLtr,BidiRtl,Language,Flash,Smiley,PageBreak,Iframe,About,ShowBlocks,CreateDiv';
    config.extraPlugins = 'preview,panel,floatpanel,richcombo,placeholder_select,widget,dialog,dialogui,lineutils,justify,autogrow';
    config.placeholder_select = {
        placeholders : ['Username','Email','Duration','Signin'],
        format : '{%placeholder%}'
    }
    config.autoGrow_minHeight = 600;
    config.fillEmptyBlocks = true;
    config.extraAllowedContent = '*{*}';
    //config.allowedContent = 'p i(*); strong em strike cite blockquote code ul ol li dl dt dd br h2 h3 h4 h5;a[!href,title];img[!src,width,height,alt,title]{width,height,text-align,float};table thead tbody tr th td[*]{*}(*)';
    config.allowedContent = 'table thead tbody tr th td[*]{*}(*);span;p i(*); strong u em strike cite blockquote code ul ol li dl dt dd br h2 h3 h4 h5;a[!href,title]';
};
