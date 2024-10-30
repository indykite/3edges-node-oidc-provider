/* eslint-disable max-len */
module.exports = `<!DOCTYPE html>
<html >
<head>
<style>
  .error_widget_wrapper {
    background: inherit;
    color: inherit;
    border: none;
  }
  .error_widget {
    border-top: solid 2px;
    border-bottom: solid 2px;
    margin: 5px 0;
    padding: 10px 40px;
    white-space: pre-wrap;
  }
  .error_widget.ace_error,
  .error_widget_arrow.ace_error {
    border-color: #ff5a5a;
  }
  .error_widget.ace_warning,
  .error_widget_arrow.ace_warning {
    border-color: #f1d817;
  }
  .error_widget.ace_info,
  .error_widget_arrow.ace_info {
    border-color: #5a5a5a;
  }
  .error_widget.ace_ok,
  .error_widget_arrow.ace_ok {
    border-color: #5aaa5a;
  }
  .error_widget_arrow {
    position: absolute;
    border: solid 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-left-color: transparent !important;
    top: -5px;
  }
</style>
<style id="ace-tm">
  .ace-tm .ace_gutter {
    background: #f0f0f0;
    color: #333;
  }
  .ace-tm .ace_print-margin {
    width: 1px;
    background: #e8e8e8;
  }
  .ace-tm .ace_fold {
    background-color: #6b72e6;
  }
  .ace-tm {
    background-color: #ffffff;
    color: black;
  }
  .ace-tm .ace_cursor {
    color: black;
  }
  .ace-tm .ace_invisible {
    color: rgb(191, 191, 191);
  }
  .ace-tm .ace_storage,
  .ace-tm .ace_keyword {
    color: blue;
  }
  .ace-tm .ace_constant {
    color: rgb(197, 6, 11);
  }
  .ace-tm .ace_constant.ace_buildin {
    color: rgb(88, 72, 246);
  }
  .ace-tm .ace_constant.ace_language {
    color: rgb(88, 92, 246);
  }
  .ace-tm .ace_constant.ace_library {
    color: rgb(6, 150, 14);
  }
  .ace-tm .ace_invalid {
    background-color: rgba(255, 0, 0, 0.1);
    color: red;
  }
  .ace-tm .ace_support.ace_function {
    color: rgb(60, 76, 114);
  }
  .ace-tm .ace_support.ace_constant {
    color: rgb(6, 150, 14);
  }
  .ace-tm .ace_support.ace_type,
  .ace-tm .ace_support.ace_class {
    color: rgb(109, 121, 222);
  }
  .ace-tm .ace_keyword.ace_operator {
    color: rgb(104, 118, 135);
  }
  .ace-tm .ace_string {
    color: rgb(3, 106, 7);
  }
  .ace-tm .ace_comment {
    color: rgb(76, 136, 107);
  }
  .ace-tm .ace_comment.ace_doc {
    color: rgb(0, 102, 255);
  }
  .ace-tm .ace_comment.ace_doc.ace_tag {
    color: rgb(128, 159, 191);
  }
  .ace-tm .ace_constant.ace_numeric {
    color: rgb(0, 0, 205);
  }
  .ace-tm .ace_variable {
    color: rgb(49, 132, 149);
  }
  .ace-tm .ace_xml-pe {
    color: rgb(104, 104, 91);
  }
  .ace-tm .ace_entity.ace_name.ace_function {
    color: #0000a2;
  }
  .ace-tm .ace_heading {
    color: rgb(12, 7, 255);
  }
  .ace-tm .ace_list {
    color: rgb(185, 6, 144);
  }
  .ace-tm .ace_meta.ace_tag {
    color: rgb(0, 22, 142);
  }
  .ace-tm .ace_string.ace_regex {
    color: rgb(255, 0, 0);
  }
  .ace-tm .ace_marker-layer .ace_selection {
    background: rgb(181, 213, 255);
  }
  .ace-tm.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px white;
  }
  .ace-tm .ace_marker-layer .ace_step {
    background: rgb(252, 255, 0);
  }
  .ace-tm .ace_marker-layer .ace_stack {
    background: rgb(164, 229, 101);
  }
  .ace-tm .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid rgb(192, 192, 192);
  }
  .ace-tm .ace_marker-layer .ace_active-line {
    background: rgba(0, 0, 0, 0.07);
  }
  .ace-tm .ace_gutter-active-line {
    background-color: #dcdcdc;
  }
  .ace-tm .ace_marker-layer .ace_selected-word {
    background: rgb(250, 250, 255);
    border: 1px solid rgb(200, 200, 250);
  }
  .ace-tm .ace_indent-guide {
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==') right repeat-y;
  }
  /*# sourceURL=ace/css/ace-tm */
</style>
<style id="ace_editor.css">
  .ace_br1 {
    border-top-left-radius: 3px;
  }
  .ace_br2 {
    border-top-right-radius: 3px;
  }
  .ace_br3 {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .ace_br4 {
    border-bottom-right-radius: 3px;
  }
  .ace_br5 {
    border-top-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .ace_br6 {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .ace_br7 {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .ace_br8 {
    border-bottom-left-radius: 3px;
  }
  .ace_br9 {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .ace_br10 {
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .ace_br11 {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .ace_br12 {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .ace_br13 {
    border-top-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .ace_br14 {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .ace_br15 {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .ace_editor {
    position: relative;
    overflow: hidden;
    padding: 0;
    font: 12px / normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
    direction: ltr;
    text-align: left;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .ace_scroller {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    background-color: inherit;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: text;
  }
  .ace_content {
    position: absolute;
    box-sizing: border-box;
    min-width: 100%;
    contain: style size layout;
    font-variant-ligatures: no-common-ligatures;
  }
  .ace_dragging .ace_scroller:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba(250, 250, 250, 0.01);
    z-index: 1000;
  }
  .ace_dragging.ace_dark .ace_scroller:before {
    background: rgba(0, 0, 0, 0.01);
  }
  .ace_selecting,
  .ace_selecting * {
    cursor: text !important;
  }
  .ace_gutter {
    position: absolute;
    overflow: hidden;
    width: auto;
    top: 0;
    bottom: 0;
    left: 0;
    cursor: default;
    z-index: 4;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    contain: style size layout;
  }
  .ace_gutter-active-line {
    position: absolute;
    left: 0;
    right: 0;
  }
  .ace_scroller.ace_scroll-left {
    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;
  }
  .ace_gutter-cell {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 19px;
    padding-right: 6px;
    background-repeat: no-repeat;
  }
  .ace_gutter-cell.ace_error {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==');
    background-repeat: no-repeat;
    background-position: 2px center;
  }
  .ace_gutter-cell.ace_warning {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==');
    background-position: 2px center;
  }
  .ace_gutter-cell.ace_info {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=');
    background-position: 2px center;
  }
  .ace_dark .ace_gutter-cell.ace_info {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC');
  }
  .ace_scrollbar {
    contain: strict;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 6;
  }
  .ace_scrollbar-inner {
    position: absolute;
    cursor: text;
    left: 0;
    top: 0;
  }
  .ace_scrollbar-v {
    overflow-x: hidden;
    overflow-y: scroll;
    top: 0;
  }
  .ace_scrollbar-h {
    overflow-x: scroll;
    overflow-y: hidden;
    left: 0;
  }
  .ace_print-margin {
    position: absolute;
    height: 100%;
  }
  .ace_text-input {
    position: absolute;
    z-index: 0;
    width: 0.5em;
    height: 1em;
    opacity: 0;
    background: transparent;
    -moz-appearance: none;
    appearance: none;
    border: none;
    resize: none;
    outline: none;
    overflow: hidden;
    font: inherit;
    padding: 0 1px;
    margin: 0 -1px;
    contain: strict;
    -ms-user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
    user-select: text;
    white-space: pre !important;
  }
  .ace_text-input.ace_composition {
    background: transparent;
    color: inherit;
    z-index: 1000;
    opacity: 1;
  }
  .ace_composition_placeholder {
    color: transparent;
  }
  .ace_composition_marker {
    border-bottom: 1px solid;
    position: absolute;
    border-radius: 0;
    margin-top: 1px;
  }
  [ace_nocontext='true'] {
    transform: none !important;
    filter: none !important;
    clip-path: none !important;
    mask: none !important;
    contain: none !important;
    perspective: none !important;
    mix-blend-mode: initial !important;
    z-index: auto;
  }
  .ace_layer {
    z-index: 1;
    position: absolute;
    overflow: hidden;
    word-wrap: normal;
    white-space: pre;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    pointer-events: none;
  }
  .ace_gutter-layer {
    position: relative;
    width: auto;
    text-align: right;
    pointer-events: auto;
    height: 1000000px;
    contain: style size layout;
  }
  .ace_text-layer {
    font: inherit !important;
    position: absolute;
    height: 1000000px;
    width: 1000000px;
    contain: style size layout;
  }
  .ace_text-layer > .ace_line,
  .ace_text-layer > .ace_line_group {
    contain: style size layout;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .ace_hidpi .ace_text-layer,
  .ace_hidpi .ace_gutter-layer,
  .ace_hidpi .ace_content,
  .ace_hidpi .ace_gutter {
    contain: strict;
    will-change: transform;
  }
  .ace_hidpi .ace_text-layer > .ace_line,
  .ace_hidpi .ace_text-layer > .ace_line_group {
    contain: strict;
  }
  .ace_cjk {
    display: inline-block;
    text-align: center;
  }
  .ace_cursor-layer {
    z-index: 4;
  }
  .ace_cursor {
    z-index: 4;
    position: absolute;
    box-sizing: border-box;
    border-left: 2px solid;
    transform: translatez(0);
  }
  .ace_multiselect .ace_cursor {
    border-left-width: 1px;
  }
  .ace_slim-cursors .ace_cursor {
    border-left-width: 1px;
  }
  .ace_overwrite-cursors .ace_cursor {
    border-left-width: 0;
    border-bottom: 1px solid;
  }
  .ace_hidden-cursors .ace_cursor {
    opacity: 0.2;
  }
  .ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {
    opacity: 0;
  }
  .ace_smooth-blinking .ace_cursor {
    transition: opacity 0.18s;
  }
  .ace_animate-blinking .ace_cursor {
    animation-duration: 1000ms;
    animation-timing-function: step-end;
    animation-name: blink-ace-animate;
    animation-iteration-count: infinite;
  }
  .ace_animate-blinking.ace_smooth-blinking .ace_cursor {
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
    animation-name: blink-ace-animate-smooth;
  }
  @keyframes blink-ace-animate {
    from,
    to {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
  }
  @keyframes blink-ace-animate-smooth {
    from,
    to {
      opacity: 1;
    }
    45% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
    85% {
      opacity: 0;
    }
  }
  .ace_marker-layer .ace_step,
  .ace_marker-layer .ace_stack {
    position: absolute;
    z-index: 3;
  }
  .ace_marker-layer .ace_selection {
    position: absolute;
    z-index: 5;
  }
  .ace_marker-layer .ace_bracket {
    position: absolute;
    z-index: 6;
  }
  .ace_marker-layer .ace_error_bracket {
    position: absolute;
    border-bottom: 1px solid #de5555;
    border-radius: 0;
  }
  .ace_marker-layer .ace_active-line {
    position: absolute;
    z-index: 2;
  }
  .ace_marker-layer .ace_selected-word {
    position: absolute;
    z-index: 4;
    box-sizing: border-box;
  }
  .ace_line .ace_fold {
    box-sizing: border-box;
    display: inline-block;
    height: 11px;
    margin-top: -2px;
    vertical-align: middle;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII='), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=');
    background-repeat: no-repeat, repeat-x;
    background-position: center center, top left;
    color: transparent;
    border: 1px solid black;
    border-radius: 2px;
    cursor: pointer;
    pointer-events: auto;
  }
  .ace_dark .ace_fold {
  }
  .ace_fold:hover {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII='), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC');
  }
  .ace_tooltip {
    background-color: #fff;
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));
    border: 1px solid gray;
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    color: black;
    max-width: 100%;
    padding: 3px 4px;
    position: fixed;
    z-index: 999999;
    box-sizing: border-box;
    cursor: default;
    white-space: pre;
    word-wrap: break-word;
    line-height: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    pointer-events: none;
  }
  .ace_folding-enabled > .ace_gutter-cell {
    padding-right: 13px;
  }
  .ace_fold-widget {
    box-sizing: border-box;
    margin: 0 -12px 0 1px;
    display: none;
    width: 11px;
    vertical-align: top;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==');
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 3px;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .ace_folding-enabled .ace_fold-widget {
    display: inline-block;
  }
  .ace_fold-widget.ace_end {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==');
  }
  .ace_fold-widget.ace_closed {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==');
  }
  .ace_fold-widget:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
  }
  .ace_fold-widget:active {
    border: 1px solid rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
  }
  .ace_dark .ace_fold-widget {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC');
  }
  .ace_dark .ace_fold-widget.ace_end {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==');
  }
  .ace_dark .ace_fold-widget.ace_closed {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==');
  }
  .ace_dark .ace_fold-widget:hover {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
  }
  .ace_dark .ace_fold-widget:active {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
  }
  .ace_inline_button {
    border: 1px solid lightgray;
    display: inline-block;
    margin: -1px 8px;
    padding: 0 5px;
    pointer-events: auto;
    cursor: pointer;
  }
  .ace_inline_button:hover {
    border-color: gray;
    background: rgba(200, 200, 200, 0.2);
    display: inline-block;
    pointer-events: auto;
  }
  .ace_fold-widget.ace_invalid {
    background-color: #ffb4b4;
    border-color: #de5555;
  }
  .ace_fade-fold-widgets .ace_fold-widget {
    transition: opacity 0.4s ease 0.05s;
    opacity: 0;
  }
  .ace_fade-fold-widgets:hover .ace_fold-widget {
    transition: opacity 0.05s ease 0.05s;
    opacity: 1;
  }
  .ace_underline {
    text-decoration: underline;
  }
  .ace_bold {
    font-weight: bold;
  }
  .ace_nobold .ace_bold {
    font-weight: normal;
  }
  .ace_italic {
    font-style: italic;
  }
  .ace_error-marker {
    background-color: rgba(255, 0, 0, 0.2);
    position: absolute;
    z-index: 9;
  }
  .ace_highlight-marker {
    background-color: rgba(255, 255, 0, 0.2);
    position: absolute;
    z-index: 8;
  }
  .ace_mobile-menu {
    position: absolute;
    line-height: 1.5;
    border-radius: 4px;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    background: white;
    box-shadow: 1px 3px 2px grey;
    border: 1px solid #dcdcdc;
    color: black;
  }
  .ace_dark > .ace_mobile-menu {
    background: #333;
    color: #ccc;
    box-shadow: 1px 3px 2px grey;
    border: 1px solid #444;
  }
  .ace_mobile-button {
    padding: 2px;
    cursor: pointer;
    overflow: hidden;
  }
  .ace_mobile-button:hover {
    background-color: #eee;
    opacity: 1;
  }
  .ace_mobile-button:active {
    background-color: #ddd;
  }
  .ace_placeholder {
    font-family: arial;
    transform: scale(0.9);
    transform-origin: left;
    white-space: pre;
    opacity: 0.7;
    margin: 0 10px;
  }
  /*# sourceURL=ace/css/ace_editor.css */
</style>
<meta charset="utf-8" />
<link rel="shortcut icon" href="/img/favicon.ico" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&amp;display=swap" rel="stylesheet" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="An Identity-aware no-code GraphQL API generator." />

<meta http-equiv="Feature-Policy" content="sync-xhr *" />

<title>3Edges</title>

<style>
  .desktop {
    display: flex;
  }

  .mobile {
    display: none;
  }

  .mobile h3,
  .mobile span {
    padding: 0 10px;
    text-align: center;
  }

  @media (max-width: 630px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }
  }
</style>
<style>
  video {
    filter: blur(0px) !important;
  }
  img:not(.purified) {
    visibility: visible !important;
  }

  video:not(.purified) {
    visibility: visible !important;
  }

  :not(.purifiedBG) {
    background-size: auto !important;
  }
</style>
<style>
  :root {
    --toastify-color-light: #fff;
    --toastify-color-dark: #121212;
    --toastify-color-info: #3498db;
    --toastify-color-success: #07bc0c;
    --toastify-color-warning: #f1c40f;
    --toastify-color-error: #e74c3c;
    --toastify-color-transparent: rgba(255, 255, 255, 0.7);
    --toastify-icon-color-info: var(--toastify-color-info);
    --toastify-icon-color-success: var(--toastify-color-success);
    --toastify-icon-color-warning: var(--toastify-color-warning);
    --toastify-icon-color-error: var(--toastify-color-error);
    --toastify-toast-width: 320px;
    --toastify-toast-background: #fff;
    --toastify-toast-min-height: 64px;
    --toastify-toast-max-height: 800px;
    --toastify-font-family: sans-serif;
    --toastify-z-index: 9999;
    --toastify-text-color-light: #757575;
    --toastify-text-color-dark: #fff;
    --toastify-text-color-info: #fff;
    --toastify-text-color-success: #fff;
    --toastify-text-color-warning: #fff;
    --toastify-text-color-error: #fff;
    --toastify-spinner-color: #616161;
    --toastify-spinner-color-empty-area: #e0e0e0;
    --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
    --toastify-color-progress-dark: #bb86fc;
    --toastify-color-progress-info: var(--toastify-color-info);
    --toastify-color-progress-success: var(--toastify-color-success);
    --toastify-color-progress-warning: var(--toastify-color-warning);
    --toastify-color-progress-error: var(--toastify-color-error);
  }

  .Toastify__toast-container {
    z-index: var(--toastify-z-index);
    -webkit-transform: translate3d(0, 0, var(--toastify-z-index) px);
    position: fixed;
    padding: 4px;
    width: var(--toastify-toast-width);
    box-sizing: border-box;
    color: #fff;
  }
  .Toastify__toast-container--top-left {
    top: 1em;
    left: 1em;
  }
  .Toastify__toast-container--top-center {
    top: 1em;
    left: 50%;
    transform: translateX(-50%);
  }
  .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
  }
  .Toastify__toast-container--bottom-left {
    bottom: 1em;
    left: 1em;
  }
  .Toastify__toast-container--bottom-center {
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
  }
  .Toastify__toast-container--bottom-right {
    bottom: 1em;
    right: 1em;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast-container {
      width: 100vw;
      padding: 0;
      left: 0;
      margin: 0;
    }
    .Toastify__toast-container--top-left,
    .Toastify__toast-container--top-center,
    .Toastify__toast-container--top-right {
      top: 0;
      transform: translateX(0);
    }
    .Toastify__toast-container--bottom-left,
    .Toastify__toast-container--bottom-center,
    .Toastify__toast-container--bottom-right {
      bottom: 0;
      transform: translateX(0);
    }
    .Toastify__toast-container--rtl {
      right: 0;
      left: initial;
    }
  }
  .Toastify__toast {
    position: relative;
    min-height: var(--toastify-toast-min-height);
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    max-height: var(--toastify-toast-max-height);
    overflow: hidden;
    font-family: var(--toastify-font-family);
    cursor: pointer;
    direction: ltr;
  }
  .Toastify__toast--rtl {
    direction: rtl;
  }
  .Toastify__toast-body {
    margin: auto 0;
    flex: 1 1 auto;
    padding: 6px;
    display: flex;
    align-items: center;
  }
  .Toastify__toast-body > div:last-child {
    flex: 1 1;
  }
  .Toastify__toast-icon {
    margin-inline-end: 10px;
    width: 20px;
    flex-shrink: 0;
    display: flex;
  }

  .Toastify--animate {
    animation-fill-mode: both;
    animation-duration: 0.7s;
  }

  .Toastify--animate-icon {
    animation-fill-mode: both;
    animation-duration: 0.3s;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast {
      margin-bottom: 0;
      border-radius: 0;
    }
  }
  .Toastify__toast-theme--dark {
    background: var(--toastify-color-dark);
    color: var(--toastify-text-color-dark);
  }
  .Toastify__toast-theme--light {
    background: var(--toastify-color-light);
    color: var(--toastify-text-color-light);
  }
  .Toastify__toast-theme--colored.Toastify__toast--default {
    background: var(--toastify-color-light);
    color: var(--toastify-text-color-light);
  }
  .Toastify__toast-theme--colored.Toastify__toast--info {
    color: var(--toastify-text-color-info);
    background: var(--toastify-color-info);
  }
  .Toastify__toast-theme--colored.Toastify__toast--success {
    color: var(--toastify-text-color-success);
    background: var(--toastify-color-success);
  }
  .Toastify__toast-theme--colored.Toastify__toast--warning {
    color: var(--toastify-text-color-warning);
    background: var(--toastify-color-warning);
  }
  .Toastify__toast-theme--colored.Toastify__toast--error {
    color: var(--toastify-text-color-error);
    background: var(--toastify-color-error);
  }

  .Toastify__progress-bar-theme--light {
    background: var(--toastify-color-progress-light);
  }
  .Toastify__progress-bar-theme--dark {
    background: var(--toastify-color-progress-dark);
  }
  .Toastify__progress-bar--info {
    background: var(--toastify-color-progress-info);
  }
  .Toastify__progress-bar--success {
    background: var(--toastify-color-progress-success);
  }
  .Toastify__progress-bar--warning {
    background: var(--toastify-color-progress-warning);
  }
  .Toastify__progress-bar--error {
    background: var(--toastify-color-progress-error);
  }
  .Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
  .Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
  .Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
  .Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
    background: var(--toastify-color-transparent);
  }

  .Toastify__close-button {
    color: #fff;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease;
    align-self: flex-start;
  }
  .Toastify__close-button--light {
    color: #000;
    opacity: 0.3;
  }
  .Toastify__close-button > svg {
    fill: currentColor;
    height: 16px;
    width: 14px;
  }
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    opacity: 1;
  }

  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
  .Toastify__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: var(--toastify-z-index);
    opacity: 0.7;
    transform-origin: left;
  }
  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
  }
  .Toastify__progress-bar--controlled {
    transition: transform 0.2s;
  }
  .Toastify__progress-bar--rtl {
    right: 0;
    left: initial;
    transform-origin: right;
  }

  .Toastify__spinner {
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 100%;
    border-color: var(--toastify-spinner-color-empty-area);
    border-right-color: var(--toastify-spinner-color);
    animation: Toastify__spin 0.65s linear infinite;
  }

  @keyframes Toastify__bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  @keyframes Toastify__bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  @keyframes Toastify__bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  @keyframes Toastify__bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .Toastify__bounce-enter--top-left,
  .Toastify__bounce-enter--bottom-left {
    animation-name: Toastify__bounceInLeft;
  }
  .Toastify__bounce-enter--top-right,
  .Toastify__bounce-enter--bottom-right {
    animation-name: Toastify__bounceInRight;
  }
  .Toastify__bounce-enter--top-center {
    animation-name: Toastify__bounceInDown;
  }
  .Toastify__bounce-enter--bottom-center {
    animation-name: Toastify__bounceInUp;
  }

  .Toastify__bounce-exit--top-left,
  .Toastify__bounce-exit--bottom-left {
    animation-name: Toastify__bounceOutLeft;
  }
  .Toastify__bounce-exit--top-right,
  .Toastify__bounce-exit--bottom-right {
    animation-name: Toastify__bounceOutRight;
  }
  .Toastify__bounce-exit--top-center {
    animation-name: Toastify__bounceOutUp;
  }
  .Toastify__bounce-exit--bottom-center {
    animation-name: Toastify__bounceOutDown;
  }

  @keyframes Toastify__zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes Toastify__zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
  .Toastify__zoom-enter {
    animation-name: Toastify__zoomIn;
  }

  .Toastify__zoom-exit {
    animation-name: Toastify__zoomOut;
  }

  @keyframes Toastify__flipIn {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  @keyframes Toastify__flipOut {
    from {
      transform: perspective(400px);
    }
    30% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }
    to {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }
  .Toastify__flip-enter {
    animation-name: Toastify__flipIn;
  }

  .Toastify__flip-exit {
    animation-name: Toastify__flipOut;
  }

  @keyframes Toastify__slideInRight {
    from {
      transform: translate3d(110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideInLeft {
    from {
      transform: translate3d(-110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideInUp {
    from {
      transform: translate3d(0, 110%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideInDown {
    from {
      transform: translate3d(0, -110%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(110%, 0, 0);
    }
  }
  @keyframes Toastify__slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-110%, 0, 0);
    }
  }
  @keyframes Toastify__slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 500px, 0);
    }
  }
  @keyframes Toastify__slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -500px, 0);
    }
  }
  .Toastify__slide-enter--top-left,
  .Toastify__slide-enter--bottom-left {
    animation-name: Toastify__slideInLeft;
  }
  .Toastify__slide-enter--top-right,
  .Toastify__slide-enter--bottom-right {
    animation-name: Toastify__slideInRight;
  }
  .Toastify__slide-enter--top-center {
    animation-name: Toastify__slideInDown;
  }
  .Toastify__slide-enter--bottom-center {
    animation-name: Toastify__slideInUp;
  }

  .Toastify__slide-exit--top-left,
  .Toastify__slide-exit--bottom-left {
    animation-name: Toastify__slideOutLeft;
  }
  .Toastify__slide-exit--top-right,
  .Toastify__slide-exit--bottom-right {
    animation-name: Toastify__slideOutRight;
  }
  .Toastify__slide-exit--top-center {
    animation-name: Toastify__slideOutUp;
  }
  .Toastify__slide-exit--bottom-center {
    animation-name: Toastify__slideOutDown;
  }

  @keyframes Toastify__spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
<style>
  .swal2-popup.swal2-toast {
    box-sizing: border-box;
    grid-column: 1/4 !important;
    grid-row: 1/4 !important;
    grid-template-columns: 1fr 99fr 1fr;
    padding: 1em;
    overflow-y: hidden;
    background: #fff;
    box-shadow: 0 0 1px hsla(0deg, 0%, 0%, 0.075), 0 1px 2px hsla(0deg, 0%, 0%, 0.075), 1px 2px 4px hsla(0deg, 0%, 0%, 0.075), 1px 3px 8px hsla(0deg, 0%, 0%, 0.075), 2px 4px 16px hsla(0deg, 0%, 0%, 0.075);
    pointer-events: all;
  }
  .swal2-popup.swal2-toast > * {
    grid-column: 2;
  }
  .swal2-popup.swal2-toast .swal2-title {
    margin: 0.5em 1em;
    padding: 0;
    font-size: 1em;
    text-align: initial;
  }
  .swal2-popup.swal2-toast .swal2-loading {
    justify-content: center;
  }
  .swal2-popup.swal2-toast .swal2-input {
    height: 2em;
    margin: 0.5em;
    font-size: 1em;
  }
  .swal2-popup.swal2-toast .swal2-validation-message {
    font-size: 1em;
  }
  .swal2-popup.swal2-toast .swal2-footer {
    margin: 0.5em 0 0;
    padding: 0.5em 0 0;
    font-size: 0.8em;
  }
  .swal2-popup.swal2-toast .swal2-close {
    grid-column: 3/3;
    grid-row: 1/99;
    align-self: center;
    width: 0.8em;
    height: 0.8em;
    margin: 0;
    font-size: 2em;
  }
  .swal2-popup.swal2-toast .swal2-html-container {
    margin: 0.5em 1em;
    padding: 0;
    font-size: 1em;
    text-align: initial;
  }
  .swal2-popup.swal2-toast .swal2-html-container:empty {
    padding: 0;
  }
  .swal2-popup.swal2-toast .swal2-loader {
    grid-column: 1;
    grid-row: 1/99;
    align-self: center;
    width: 2em;
    height: 2em;
    margin: 0.25em;
  }
  .swal2-popup.swal2-toast .swal2-icon {
    grid-column: 1;
    grid-row: 1/99;
    align-self: center;
    width: 2em;
    min-width: 2em;
    height: 2em;
    margin: 0 0.5em 0 0;
  }
  .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {
    display: flex;
    align-items: center;
    font-size: 1.8em;
    font-weight: 700;
  }
  .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {
    width: 2em;
    height: 2em;
  }
  .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {
    top: 0.875em;
    width: 1.375em;
  }
  .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {
    left: 0.3125em;
  }
  .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {
    right: 0.3125em;
  }
  .swal2-popup.swal2-toast .swal2-actions {
    justify-content: flex-start;
    height: auto;
    margin: 0;
    margin-top: 0.5em;
    padding: 0 0.5em;
  }
  .swal2-popup.swal2-toast .swal2-styled {
    margin: 0.25em 0.5em;
    padding: 0.4em 0.6em;
    font-size: 1em;
  }
  .swal2-popup.swal2-toast .swal2-success {
    border-color: #a5dc86;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {
    position: absolute;
    width: 1.6em;
    height: 3em;
    transform: rotate(45deg);
    border-radius: 50%;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {
    top: -0.8em;
    left: -0.5em;
    transform: rotate(-45deg);
    transform-origin: 2em 2em;
    border-radius: 4em 0 0 4em;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {
    top: -0.25em;
    left: 0.9375em;
    transform-origin: 0 1.5em;
    border-radius: 0 4em 4em 0;
  }
  .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {
    width: 2em;
    height: 2em;
  }
  .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {
    top: 0;
    left: 0.4375em;
    width: 0.4375em;
    height: 2.6875em;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {
    height: 0.3125em;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {
    top: 1.125em;
    left: 0.1875em;
    width: 0.75em;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {
    top: 0.9375em;
    right: 0.1875em;
    width: 1.375em;
  }
  .swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {
    -webkit-animation: swal2-toast-animate-success-line-tip 0.75s;
    animation: swal2-toast-animate-success-line-tip 0.75s;
  }
  .swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {
    -webkit-animation: swal2-toast-animate-success-line-long 0.75s;
    animation: swal2-toast-animate-success-line-long 0.75s;
  }
  .swal2-popup.swal2-toast.swal2-show {
    -webkit-animation: swal2-toast-show 0.5s;
    animation: swal2-toast-show 0.5s;
  }
  .swal2-popup.swal2-toast.swal2-hide {
    -webkit-animation: swal2-toast-hide 0.1s forwards;
    animation: swal2-toast-hide 0.1s forwards;
  }
  .swal2-container {
    display: grid;
    position: fixed;
    z-index: 1060;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    grid-template-areas: 'top-start     top            top-end' 'center-start  center         center-end' 'bottom-start  bottom-center  bottom-end';
    grid-template-rows: minmax(-webkit-min-content, auto) minmax(-webkit-min-content, auto) minmax(-webkit-min-content, auto);
    grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);
    height: 100%;
    padding: 0.625em;
    overflow-x: hidden;
    transition: background-color 0.1s;
    -webkit-overflow-scrolling: touch;
  }
  .swal2-container.swal2-backdrop-show,
  .swal2-container.swal2-noanimation {
    background: rgba(0, 0, 0, 0.4);
  }
  .swal2-container.swal2-backdrop-hide {
    background: 0 0 !important;
  }
  .swal2-container.swal2-bottom-start,
  .swal2-container.swal2-center-start,
  .swal2-container.swal2-top-start {
    grid-template-columns: minmax(0, 1fr) auto auto;
  }
  .swal2-container.swal2-bottom,
  .swal2-container.swal2-center,
  .swal2-container.swal2-top {
    grid-template-columns: auto minmax(0, 1fr) auto;
  }
  .swal2-container.swal2-bottom-end,
  .swal2-container.swal2-center-end,
  .swal2-container.swal2-top-end {
    grid-template-columns: auto auto minmax(0, 1fr);
  }
  .swal2-container.swal2-top-start > .swal2-popup {
    align-self: start;
  }
  .swal2-container.swal2-top > .swal2-popup {
    grid-column: 2;
    align-self: start;
    justify-self: center;
  }
  .swal2-container.swal2-top-end > .swal2-popup,
  .swal2-container.swal2-top-right > .swal2-popup {
    grid-column: 3;
    align-self: start;
    justify-self: end;
  }
  .swal2-container.swal2-center-left > .swal2-popup,
  .swal2-container.swal2-center-start > .swal2-popup {
    grid-row: 2;
    align-self: center;
  }
  .swal2-container.swal2-center > .swal2-popup {
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
  }
  .swal2-container.swal2-center-end > .swal2-popup,
  .swal2-container.swal2-center-right > .swal2-popup {
    grid-column: 3;
    grid-row: 2;
    align-self: center;
    justify-self: end;
  }
  .swal2-container.swal2-bottom-left > .swal2-popup,
  .swal2-container.swal2-bottom-start > .swal2-popup {
    grid-column: 1;
    grid-row: 3;
    align-self: end;
  }
  .swal2-container.swal2-bottom > .swal2-popup {
    grid-column: 2;
    grid-row: 3;
    justify-self: center;
    align-self: end;
  }
  .swal2-container.swal2-bottom-end > .swal2-popup,
  .swal2-container.swal2-bottom-right > .swal2-popup {
    grid-column: 3;
    grid-row: 3;
    align-self: end;
    justify-self: end;
  }
  .swal2-container.swal2-grow-fullscreen > .swal2-popup,
  .swal2-container.swal2-grow-row > .swal2-popup {
    grid-column: 1/4;
    width: 100%;
  }
  .swal2-container.swal2-grow-column > .swal2-popup,
  .swal2-container.swal2-grow-fullscreen > .swal2-popup {
    grid-row: 1/4;
    align-self: stretch;
  }
  .swal2-container.swal2-no-transition {
    transition: none !important;
  }
  .swal2-popup {
    display: none;
    position: relative;
    box-sizing: border-box;
    grid-template-columns: minmax(0, 100%);
    width: 32em;
    max-width: 100%;
    padding: 0 0 1.25em;
    border: none;
    border-radius: 5px;
    background: #fff;
    color: #545454;
    font-family: inherit;
    font-size: 1rem;
  }
  .swal2-popup:focus {
    outline: 0;
  }
  .swal2-popup.swal2-loading {
    overflow-y: hidden;
  }
  .swal2-title {
    position: relative;
    max-width: 100%;
    margin: 0;
    padding: 0.8em 1em 0;
    color: inherit;
    font-size: 1.875em;
    font-weight: 600;
    text-align: center;
    text-transform: none;
    word-wrap: break-word;
  }
  .swal2-actions {
    display: flex;
    z-index: 1;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: 1.25em auto 0;
    padding: 0;
  }
  .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {
    opacity: 0.4;
  }
  .swal2-actions:not(.swal2-loading) .swal2-styled:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
  .swal2-actions:not(.swal2-loading) .swal2-styled:active {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  }
  .swal2-loader {
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.2em;
    height: 2.2em;
    margin: 0 1.875em;
    -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;
    animation: swal2-rotate-loading 1.5s linear 0s infinite normal;
    border-width: 0.25em;
    border-style: solid;
    border-radius: 100%;
    border-color: #2778c4 transparent #2778c4 transparent;
  }
  .swal2-styled {
    margin: 0.3125em;
    padding: 0.625em 1.1em;
    transition: box-shadow 0.1s;
    box-shadow: 0 0 0 3px transparent;
    font-weight: 500;
  }
  .swal2-styled:not([disabled]) {
    cursor: pointer;
  }
  .swal2-styled.swal2-confirm {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #7066e0;
    color: #fff;
    font-size: 1em;
  }
  .swal2-styled.swal2-confirm:focus {
    box-shadow: 0 0 0 3px rgba(112, 102, 224, 0.5);
  }
  .swal2-styled.swal2-deny {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #dc3741;
    color: #fff;
    font-size: 1em;
  }
  .swal2-styled.swal2-deny:focus {
    box-shadow: 0 0 0 3px rgba(220, 55, 65, 0.5);
  }
  .swal2-styled.swal2-cancel {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #6e7881;
    color: #fff;
    font-size: 1em;
  }
  .swal2-styled.swal2-cancel:focus {
    box-shadow: 0 0 0 3px rgba(110, 120, 129, 0.5);
  }
  .swal2-styled.swal2-default-outline:focus {
    box-shadow: 0 0 0 3px rgba(100, 150, 200, 0.5);
  }
  .swal2-styled:focus {
    outline: 0;
  }
  .swal2-styled::-moz-focus-inner {
    border: 0;
  }
  .swal2-footer {
    justify-content: center;
    margin: 1em 0 0;
    padding: 1em 1em 0;
    border-top: 1px solid #eee;
    color: inherit;
    font-size: 1em;
  }
  .swal2-timer-progress-bar-container {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    grid-column: auto !important;
    overflow: hidden;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .swal2-timer-progress-bar {
    width: 100%;
    height: 0.25em;
    background: rgba(0, 0, 0, 0.2);
  }
  .swal2-image {
    max-width: 100%;
    margin: 2em auto 1em;
  }
  .swal2-close {
    z-index: 2;
    align-items: center;
    justify-content: center;
    width: 1.2em;
    height: 1.2em;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: -1.2em;
    padding: 0;
    overflow: hidden;
    transition: color 0.1s, box-shadow 0.1s;
    border: none;
    border-radius: 5px;
    background: 0 0;
    color: #ccc;
    font-family: serif;
    font-family: monospace;
    font-size: 2.5em;
    cursor: pointer;
    justify-self: end;
  }
  .swal2-close:hover {
    transform: none;
    background: 0 0;
    color: #f27474;
  }
  button {
    appearance: auto;
    writing-mode: horizontal-tb !important;
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-weight: ;
    font-stretch: ;
    font-size: ;
    font-family: ;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: buttonface;
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
  }
  .css-d9c359-MuiButtonBase-root-MuiToggleButton-root {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 11px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.54);
  }
  .css-1gjgmky-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .css-1gjgmky-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped:not(:first-of-type) {
    margin-left: -1px;
    border-left: 1px solid transparent;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .css-1gjgmky-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped {
  }
  .css-d9c359-MuiButtonBase-root-MuiToggleButton-root:hover {
    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.04);
  }
  .css-d9c359-MuiButtonBase-root-MuiToggleButton-root.Mui-selected {
    color: #1976d2;
    background-color: rgba(25, 118, 210, 0.08);
  }
  .css-1gjgmky-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .css-d9c359-MuiButtonBase-root-MuiToggleButton-root.Mui-selected:hover {
    background-color: rgba(25, 118, 210, 0.12);
  }
  .css-8je8zh-MuiTouchRipple-root {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
  }
  .swal2-close:focus {
    outline: 0;
    box-shadow: inset 0 0 0 3px rgba(100, 150, 200, 0.5);
  }
  .swal2-close::-moz-focus-inner {
    border: 0;
  }
  .swal2-html-container {
    z-index: 1;
    justify-content: center;
    margin: 1em 1.6em 0.3em;
    padding: 0;
    overflow: auto;
    color: inherit;
    font-size: 1.125em;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    word-wrap: break-word;
    word-break: break-word;
  }
  .swal2-checkbox,
  .swal2-file,
  .swal2-input,
  .swal2-radio,
  .swal2-select,
  .swal2-textarea {
    margin: 1em 2em 3px;
  }
  .swal2-file,
  .swal2-input,
  .swal2-textarea {
    box-sizing: border-box;
    width: auto;
    transition: border-color 0.1s, box-shadow 0.1s;
    border: 1px solid #d9d9d9;
    border-radius: 0.1875em;
    background: 0 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;
    color: inherit;
    font-size: 1.125em;
  }
  .swal2-file.swal2-inputerror,
  .swal2-input.swal2-inputerror,
  .swal2-textarea.swal2-inputerror {
    border-color: #f27474 !important;
    box-shadow: 0 0 2px #f27474 !important;
  }
  .swal2-file:focus,
  .swal2-input:focus,
  .swal2-textarea:focus {
    border: 1px solid #b4dbed;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);
  }
  .swal2-file::-moz-placeholder,
  .swal2-input::-moz-placeholder,
  .swal2-textarea::-moz-placeholder {
    color: #ccc;
  }
  .swal2-file:-ms-input-placeholder,
  .swal2-input:-ms-input-placeholder,
  .swal2-textarea:-ms-input-placeholder {
    color: #ccc;
  }
  .swal2-file::placeholder,
  .swal2-input::placeholder,
  .swal2-textarea::placeholder {
    color: #ccc;
  }
  .swal2-range {
    margin: 1em 2em 3px;
    background: #fff;
  }
  .swal2-range input {
    width: 80%;
  }
  .swal2-range output {
    width: 20%;
    color: inherit;
    font-weight: 600;
    text-align: center;
  }
  .swal2-range input,
  .swal2-range output {
    height: 2.625em;
    padding: 0;
    font-size: 1.125em;
    line-height: 2.625em;
  }
  .swal2-input {
    height: 2.625em;
    padding: 0 0.75em;
  }
  .swal2-file {
    width: 75%;
    margin-right: auto;
    margin-left: auto;
    background: 0 0;
    font-size: 1.125em;
  }
  .swal2-textarea {
    height: 6.75em;
    padding: 0.75em;
  }
  .swal2-select {
    min-width: 50%;
    max-width: 100%;
    padding: 0.375em 0.625em;
    background: 0 0;
    color: inherit;
    font-size: 1.125em;
  }
  .swal2-checkbox,
  .swal2-radio {
    align-items: center;
    justify-content: center;
    background: #fff;
    color: inherit;
  }
  .swal2-checkbox label,
  .swal2-radio label {
    margin: 0 0.6em;
    font-size: 1.125em;
  }
  .swal2-checkbox input,
  .swal2-radio input {
    flex-shrink: 0;
    margin: 0 0.4em;
  }
  .swal2-input-label {
    display: flex;
    justify-content: center;
    margin: 1em auto 0;
  }
  .swal2-validation-message {
    align-items: center;
    justify-content: center;
    margin: 1em 0 0;
    padding: 0.625em;
    overflow: hidden;
    background: #f0f0f0;
    color: #666;
    font-size: 1em;
    font-weight: 300;
  }
  .swal2-validation-message::before {
    content: '!';
    display: inline-block;
    width: 1.5em;
    min-width: 1.5em;
    height: 1.5em;
    margin: 0 0.625em;
    border-radius: 50%;
    background-color: #f27474;
    color: #fff;
    font-weight: 600;
    line-height: 1.5em;
    text-align: center;
  }
  .swal2-icon {
    position: relative;
    box-sizing: content-box;
    justify-content: center;
    width: 5em;
    height: 5em;
    margin: 2.5em auto 0.6em;
    border: 0.25em solid transparent;
    border-radius: 50%;
    border-color: #000;
    font-family: inherit;
    line-height: 5em;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .swal2-icon .swal2-icon-content {
    display: flex;
    align-items: center;
    font-size: 3.75em;
  }
  .swal2-icon.swal2-error {
    border-color: #f27474;
    color: #f27474;
  }
  .swal2-icon.swal2-error .swal2-x-mark {
    position: relative;
    flex-grow: 1;
  }
  .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {
    display: block;
    position: absolute;
    top: 2.3125em;
    width: 2.9375em;
    height: 0.3125em;
    border-radius: 0.125em;
    background-color: #f27474;
  }
  .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {
    left: 1.0625em;
    transform: rotate(45deg);
  }
  .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {
    right: 1em;
    transform: rotate(-45deg);
  }
  .swal2-icon.swal2-error.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
  }
  .swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {
    -webkit-animation: swal2-animate-error-x-mark 0.5s;
    animation: swal2-animate-error-x-mark 0.5s;
  }
  .swal2-icon.swal2-warning {
    border-color: #facea8;
    color: #f8bb86;
  }
  .swal2-icon.swal2-warning.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
  }
  .swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content {
    -webkit-animation: swal2-animate-i-mark 0.5s;
    animation: swal2-animate-i-mark 0.5s;
  }
  .swal2-icon.swal2-info {
    border-color: #9de0f6;
    color: #3fc3ee;
  }
  .swal2-icon.swal2-info.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
  }
  .swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content {
    -webkit-animation: swal2-animate-i-mark 0.8s;
    animation: swal2-animate-i-mark 0.8s;
  }
  .swal2-icon.swal2-question {
    border-color: #c9dae1;
    color: #87adbd;
  }
  .swal2-icon.swal2-question.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
  }
  .swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content {
    -webkit-animation: swal2-animate-question-mark 0.8s;
    animation: swal2-animate-question-mark 0.8s;
  }
  .swal2-icon.swal2-success {
    border-color: #a5dc86;
    color: #a5dc86;
  }
  .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {
    position: absolute;
    width: 3.75em;
    height: 7.5em;
    transform: rotate(45deg);
    border-radius: 50%;
  }
  .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {
    top: -0.4375em;
    left: -2.0635em;
    transform: rotate(-45deg);
    transform-origin: 3.75em 3.75em;
    border-radius: 7.5em 0 0 7.5em;
  }
  .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {
    top: -0.6875em;
    left: 1.875em;
    transform: rotate(-45deg);
    transform-origin: 0 3.75em;
    border-radius: 0 7.5em 7.5em 0;
  }
  .swal2-icon.swal2-success .swal2-success-ring {
    position: absolute;
    z-index: 2;
    top: -0.25em;
    left: -0.25em;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border: 0.25em solid rgba(165, 220, 134, 0.3);
    border-radius: 50%;
  }
  .swal2-icon.swal2-success .swal2-success-fix {
    position: absolute;
    z-index: 1;
    top: 0.5em;
    left: 1.625em;
    width: 0.4375em;
    height: 5.625em;
    transform: rotate(-45deg);
  }
  .swal2-icon.swal2-success [class^='swal2-success-line'] {
    display: block;
    position: absolute;
    z-index: 2;
    height: 0.3125em;
    border-radius: 0.125em;
    background-color: #a5dc86;
  }
  .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {
    top: 2.875em;
    left: 0.8125em;
    width: 1.5625em;
    transform: rotate(45deg);
  }
  .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {
    top: 2.375em;
    right: 0.5em;
    width: 2.9375em;
    transform: rotate(-45deg);
  }
  .swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {
    -webkit-animation: swal2-animate-success-line-tip 0.75s;
    animation: swal2-animate-success-line-tip 0.75s;
  }
  .swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {
    -webkit-animation: swal2-animate-success-line-long 0.75s;
    animation: swal2-animate-success-line-long 0.75s;
  }
  .swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {
    -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;
    animation: swal2-rotate-success-circular-line 4.25s ease-in;
  }
  .swal2-progress-steps {
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
    margin: 1.25em auto;
    padding: 0;
    background: 0 0;
    font-weight: 600;
  }
  .swal2-progress-steps li {
    display: inline-block;
    position: relative;
  }
  .swal2-progress-steps .swal2-progress-step {
    z-index: 20;
    flex-shrink: 0;
    width: 2em;
    height: 2em;
    border-radius: 2em;
    background: #2778c4;
    color: #fff;
    line-height: 2em;
    text-align: center;
  }
  .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {
    background: #2778c4;
  }
  .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {
    background: #add8e6;
    color: #fff;
  }
  .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {
    background: #add8e6;
  }
  .swal2-progress-steps .swal2-progress-step-line {
    z-index: 10;
    flex-shrink: 0;
    width: 2.5em;
    height: 0.4em;
    margin: 0 -1px;
    background: #2778c4;
  }
  [class^='swal2'] {
    -webkit-tap-highlight-color: transparent;
  }
  .swal2-show {
    -webkit-animation: swal2-show 0.3s;
    animation: swal2-show 0.3s;
  }
  .swal2-hide {
    -webkit-animation: swal2-hide 0.15s forwards;
    animation: swal2-hide 0.15s forwards;
  }
  .swal2-noanimation {
    transition: none;
  }
  .swal2-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }
  .swal2-rtl .swal2-close {
    margin-right: initial;
    margin-left: 0;
  }
  .swal2-rtl .swal2-timer-progress-bar {
    right: 0;
    left: auto;
  }
  .swal2-no-war {
    display: flex;
    position: fixed;
    z-index: 1061;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.375em;
    background: #20232a;
    color: #fff;
    text-align: center;
  }
  .swal2-no-war a {
    color: #61dafb;
    text-decoration: none;
  }
  .swal2-no-war a:hover {
    text-decoration: underline;
  }
  @-webkit-keyframes swal2-toast-show {
    0% {
      transform: translateY(-0.625em) rotateZ(2deg);
    }
    33% {
      transform: translateY(0) rotateZ(-2deg);
    }
    66% {
      transform: translateY(0.3125em) rotateZ(2deg);
    }
    100% {
      transform: translateY(0) rotateZ(0);
    }
  }
  @keyframes swal2-toast-show {
    0% {
      transform: translateY(-0.625em) rotateZ(2deg);
    }
    33% {
      transform: translateY(0) rotateZ(-2deg);
    }
    66% {
      transform: translateY(0.3125em) rotateZ(2deg);
    }
    100% {
      transform: translateY(0) rotateZ(0);
    }
  }
  @-webkit-keyframes swal2-toast-hide {
    100% {
      transform: rotateZ(1deg);
      opacity: 0;
    }
  }
  @keyframes swal2-toast-hide {
    100% {
      transform: rotateZ(1deg);
      opacity: 0;
    }
  }
  @-webkit-keyframes swal2-toast-animate-success-line-tip {
    0% {
      top: 0.5625em;
      left: 0.0625em;
      width: 0;
    }
    54% {
      top: 0.125em;
      left: 0.125em;
      width: 0;
    }
    70% {
      top: 0.625em;
      left: -0.25em;
      width: 1.625em;
    }
    84% {
      top: 1.0625em;
      left: 0.75em;
      width: 0.5em;
    }
    100% {
      top: 1.125em;
      left: 0.1875em;
      width: 0.75em;
    }
  }
  @keyframes swal2-toast-animate-success-line-tip {
    0% {
      top: 0.5625em;
      left: 0.0625em;
      width: 0;
    }
    54% {
      top: 0.125em;
      left: 0.125em;
      width: 0;
    }
    70% {
      top: 0.625em;
      left: -0.25em;
      width: 1.625em;
    }
    84% {
      top: 1.0625em;
      left: 0.75em;
      width: 0.5em;
    }
    100% {
      top: 1.125em;
      left: 0.1875em;
      width: 0.75em;
    }
  }
  @-webkit-keyframes swal2-toast-animate-success-line-long {
    0% {
      top: 1.625em;
      right: 1.375em;
      width: 0;
    }
    65% {
      top: 1.25em;
      right: 0.9375em;
      width: 0;
    }
    84% {
      top: 0.9375em;
      right: 0;
      width: 1.125em;
    }
    100% {
      top: 0.9375em;
      right: 0.1875em;
      width: 1.375em;
    }
  }
  @keyframes swal2-toast-animate-success-line-long {
    0% {
      top: 1.625em;
      right: 1.375em;
      width: 0;
    }
    65% {
      top: 1.25em;
      right: 0.9375em;
      width: 0;
    }
    84% {
      top: 0.9375em;
      right: 0;
      width: 1.125em;
    }
    100% {
      top: 0.9375em;
      right: 0.1875em;
      width: 1.375em;
    }
  }
  @-webkit-keyframes swal2-show {
    0% {
      transform: scale(0.7);
    }
    45% {
      transform: scale(1.05);
    }
    80% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes swal2-show {
    0% {
      transform: scale(0.7);
    }
    45% {
      transform: scale(1.05);
    }
    80% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
  @-webkit-keyframes swal2-hide {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
  }
  @keyframes swal2-hide {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
  }
  @-webkit-keyframes swal2-animate-success-line-tip {
    0% {
      top: 1.1875em;
      left: 0.0625em;
      width: 0;
    }
    54% {
      top: 1.0625em;
      left: 0.125em;
      width: 0;
    }
    70% {
      top: 2.1875em;
      left: -0.375em;
      width: 3.125em;
    }
    84% {
      top: 3em;
      left: 1.3125em;
      width: 1.0625em;
    }
    100% {
      top: 2.8125em;
      left: 0.8125em;
      width: 1.5625em;
    }
  }
  @keyframes swal2-animate-success-line-tip {
    0% {
      top: 1.1875em;
      left: 0.0625em;
      width: 0;
    }
    54% {
      top: 1.0625em;
      left: 0.125em;
      width: 0;
    }
    70% {
      top: 2.1875em;
      left: -0.375em;
      width: 3.125em;
    }
    84% {
      top: 3em;
      left: 1.3125em;
      width: 1.0625em;
    }
    100% {
      top: 2.8125em;
      left: 0.8125em;
      width: 1.5625em;
    }
  }
  @-webkit-keyframes swal2-animate-success-line-long {
    0% {
      top: 3.375em;
      right: 2.875em;
      width: 0;
    }
    65% {
      top: 3.375em;
      right: 2.875em;
      width: 0;
    }
    84% {
      top: 2.1875em;
      right: 0;
      width: 3.4375em;
    }
    100% {
      top: 2.375em;
      right: 0.5em;
      width: 2.9375em;
    }
  }
  @keyframes swal2-animate-success-line-long {
    0% {
      top: 3.375em;
      right: 2.875em;
      width: 0;
    }
    65% {
      top: 3.375em;
      right: 2.875em;
      width: 0;
    }
    84% {
      top: 2.1875em;
      right: 0;
      width: 3.4375em;
    }
    100% {
      top: 2.375em;
      right: 0.5em;
      width: 2.9375em;
    }
  }
  @-webkit-keyframes swal2-rotate-success-circular-line {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }
  @keyframes swal2-rotate-success-circular-line {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }
  @-webkit-keyframes swal2-animate-error-x-mark {
    0% {
      margin-top: 1.625em;
      transform: scale(0.4);
      opacity: 0;
    }
    50% {
      margin-top: 1.625em;
      transform: scale(0.4);
      opacity: 0;
    }
    80% {
      margin-top: -0.375em;
      transform: scale(1.15);
    }
    100% {
      margin-top: 0;
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes swal2-animate-error-x-mark {
    0% {
      margin-top: 1.625em;
      transform: scale(0.4);
      opacity: 0;
    }
    50% {
      margin-top: 1.625em;
      transform: scale(0.4);
      opacity: 0;
    }
    80% {
      margin-top: -0.375em;
      transform: scale(1.15);
    }
    100% {
      margin-top: 0;
      transform: scale(1);
      opacity: 1;
    }
  }
  @-webkit-keyframes swal2-animate-error-icon {
    0% {
      transform: rotateX(100deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes swal2-animate-error-icon {
    0% {
      transform: rotateX(100deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes swal2-rotate-loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes swal2-rotate-loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes swal2-animate-question-mark {
    0% {
      transform: rotateY(-360deg);
    }
    100% {
      transform: rotateY(0);
    }
  }
  @keyframes swal2-animate-question-mark {
    0% {
      transform: rotateY(-360deg);
    }
    100% {
      transform: rotateY(0);
    }
  }
  @-webkit-keyframes swal2-animate-i-mark {
    0% {
      transform: rotateZ(45deg);
      opacity: 0;
    }
    25% {
      transform: rotateZ(-25deg);
      opacity: 0.4;
    }
    50% {
      transform: rotateZ(15deg);
      opacity: 0.8;
    }
    75% {
      transform: rotateZ(-5deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes swal2-animate-i-mark {
    0% {
      transform: rotateZ(45deg);
      opacity: 0;
    }
    25% {
      transform: rotateZ(-25deg);
      opacity: 0.4;
    }
    50% {
      transform: rotateZ(15deg);
      opacity: 0.8;
    }
    75% {
      transform: rotateZ(-5deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0);
      opacity: 1;
    }
  }
  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
    overflow: hidden;
  }
  body.swal2-height-auto {
    height: auto !important;
  }
  body.swal2-no-backdrop .swal2-container {
    background-color: transparent !important;
    pointer-events: none;
  }
  body.swal2-no-backdrop .swal2-container .swal2-popup {
    pointer-events: all;
  }
  body.swal2-no-backdrop .swal2-container .swal2-modal {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  @media print {
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
      overflow-y: scroll !important;
    }
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden='true'] {
      display: none;
    }
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {
      position: static !important;
    }
  }
  body.swal2-toast-shown .swal2-container {
    box-sizing: border-box;
    width: 360px;
    max-width: 100%;
    background-color: transparent;
    pointer-events: none;
  }
  body.swal2-toast-shown .swal2-container.swal2-top {
    top: 0;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translateX(-50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-top-end,
  body.swal2-toast-shown .swal2-container.swal2-top-right {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
  }
  body.swal2-toast-shown .swal2-container.swal2-top-left,
  body.swal2-toast-shown .swal2-container.swal2-top-start {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
  }
  body.swal2-toast-shown .swal2-container.swal2-center-left,
  body.swal2-toast-shown .swal2-container.swal2-center-start {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 0;
    transform: translateY(-50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-center {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-center-end,
  body.swal2-toast-shown .swal2-container.swal2-center-right {
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    transform: translateY(-50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-bottom-left,
  body.swal2-toast-shown .swal2-container.swal2-bottom-start {
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
  }
  body.swal2-toast-shown .swal2-container.swal2-bottom {
    top: auto;
    right: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-bottom-end,
  body.swal2-toast-shown .swal2-container.swal2-bottom-right {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }
</style>
<style>
  .backgroundLoading {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }

  .positionLoading {
    position: absolute;
    top: 45%;
    left: 45%;
  }

  .positionLoading .MuiCircularProgress-colorPrimary {
    color: #fff;
  }

</style>
<style>
  :focus-visible {
    outline: none !important;
    border: 0;
  }

  .MuiDialog-paperWidthSm {
    width: 75% !important;
    overflow-x: hidden;
  }

  .modalCodeEditor .MuiDialog-paperWidthSm {
    max-width: 75% !important;
  }

  .textFieldInsideModal {
    margin: 0 !important;
    padding: 10px !important;
    width: calc(100% - 25px) !important;
    height: 100% !important;
  }

  .textFieldInsideModal fieldset {
    border: 0 !important;
  }

  .modalCodeEditor .ace-monokai .ace_print-margin {
    width: 0 !important;
  }

</style>
<style>
  .swal2-popup.swal2-toast {
    box-sizing: border-box;
    grid-column: 1/4 !important;
    grid-row: 1/4 !important;
    grid-template-columns: 1fr 99fr 1fr;
    padding: 1em;
    overflow-y: hidden;
    background: #fff;
    box-shadow: 0 0 1px hsla(0deg, 0%, 0%, 0.075), 0 1px 2px hsla(0deg, 0%, 0%, 0.075), 1px 2px 4px hsla(0deg, 0%, 0%, 0.075), 1px 3px 8px hsla(0deg, 0%, 0%, 0.075), 2px 4px 16px hsla(0deg, 0%, 0%, 0.075);
    pointer-events: all;
  }
  .swal2-popup.swal2-toast > * {
    grid-column: 2;
  }
  .swal2-popup.swal2-toast .swal2-title {
    margin: 0.5em 1em;
    padding: 0;
    font-size: 1em;
    text-align: initial;
  }
  .swal2-popup.swal2-toast .swal2-loading {
    justify-content: center;
  }
  .swal2-popup.swal2-toast .swal2-input {
    height: 2em;
    margin: 0.5em;
    font-size: 1em;
  }
  .swal2-popup.swal2-toast .swal2-validation-message {
    font-size: 1em;
  }
  .swal2-popup.swal2-toast .swal2-footer {
    margin: 0.5em 0 0;
    padding: 0.5em 0 0;
    font-size: 0.8em;
  }
  .swal2-popup.swal2-toast .swal2-close {
    grid-column: 3/3;
    grid-row: 1/99;
    align-self: center;
    width: 0.8em;
    height: 0.8em;
    margin: 0;
    font-size: 2em;
  }
  .swal2-popup.swal2-toast .swal2-html-container {
    margin: 0.5em 1em;
    padding: 0;
    font-size: 1em;
    text-align: initial;
  }
  .swal2-popup.swal2-toast .swal2-html-container:empty {
    padding: 0;
  }
  .swal2-popup.swal2-toast .swal2-loader {
    grid-column: 1;
    grid-row: 1/99;
    align-self: center;
    width: 2em;
    height: 2em;
    margin: 0.25em;
  }
  .swal2-popup.swal2-toast .swal2-icon {
    grid-column: 1;
    grid-row: 1/99;
    align-self: center;
    width: 2em;
    min-width: 2em;
    height: 2em;
    margin: 0 0.5em 0 0;
  }
  .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {
    display: flex;
    align-items: center;
    font-size: 1.8em;
    font-weight: 700;
  }
  .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {
    width: 2em;
    height: 2em;
  }
  .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {
    top: 0.875em;
    width: 1.375em;
  }
  .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {
    left: 0.3125em;
  }
  .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {
    right: 0.3125em;
  }
  .swal2-popup.swal2-toast .swal2-actions {
    justify-content: flex-start;
    height: auto;
    margin: 0;
    margin-top: 0.5em;
    padding: 0 0.5em;
  }
  .swal2-popup.swal2-toast .swal2-styled {
    margin: 0.25em 0.5em;
    padding: 0.4em 0.6em;
    font-size: 1em;
  }
  .swal2-popup.swal2-toast .swal2-success {
    border-color: #a5dc86;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {
    position: absolute;
    width: 1.6em;
    height: 3em;
    transform: rotate(45deg);
    border-radius: 50%;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {
    top: -0.8em;
    left: -0.5em;
    transform: rotate(-45deg);
    transform-origin: 2em 2em;
    border-radius: 4em 0 0 4em;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {
    top: -0.25em;
    left: 0.9375em;
    transform-origin: 0 1.5em;
    border-radius: 0 4em 4em 0;
  }
  .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {
    width: 2em;
    height: 2em;
  }
  .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {
    top: 0;
    left: 0.4375em;
    width: 0.4375em;
    height: 2.6875em;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {
    height: 0.3125em;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {
    top: 1.125em;
    left: 0.1875em;
    width: 0.75em;
  }
  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {
    top: 0.9375em;
    right: 0.1875em;
    width: 1.375em;
  }
  .swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {
    animation: swal2-toast-animate-success-line-tip 0.75s;
  }
  .swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {
    animation: swal2-toast-animate-success-line-long 0.75s;
  }
  .swal2-popup.swal2-toast.swal2-show {
    animation: swal2-toast-show 0.5s;
  }
  .swal2-popup.swal2-toast.swal2-hide {
    animation: swal2-toast-hide 0.1s forwards;
  }
  .swal2-container {
    display: grid;
    position: fixed;
    z-index: 1060;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    grid-template-areas: 'top-start     top            top-end' 'center-start  center         center-end' 'bottom-start  bottom-center  bottom-end';
    grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);
    height: 100%;
    padding: 0.625em;
    overflow-x: hidden;
    transition: background-color 0.1s;
    -webkit-overflow-scrolling: touch;
  }
  .swal2-container.swal2-backdrop-show,
  .swal2-container.swal2-noanimation {
    background: rgba(0, 0, 0, 0.4);
  }
  .swal2-container.swal2-backdrop-hide {
    background: 0 0 !important;
  }
  .swal2-container.swal2-bottom-start,
  .swal2-container.swal2-center-start,
  .swal2-container.swal2-top-start {
    grid-template-columns: minmax(0, 1fr) auto auto;
  }
  .swal2-container.swal2-bottom,
  .swal2-container.swal2-center,
  .swal2-container.swal2-top {
    grid-template-columns: auto minmax(0, 1fr) auto;
  }
  .swal2-container.swal2-bottom-end,
  .swal2-container.swal2-center-end,
  .swal2-container.swal2-top-end {
    grid-template-columns: auto auto minmax(0, 1fr);
  }
  .swal2-container.swal2-top-start > .swal2-popup {
    align-self: start;
  }
  .swal2-container.swal2-top > .swal2-popup {
    grid-column: 2;
    align-self: start;
    justify-self: center;
  }
  .swal2-container.swal2-top-end > .swal2-popup,
  .swal2-container.swal2-top-right > .swal2-popup {
    grid-column: 3;
    align-self: start;
    justify-self: end;
  }
  .swal2-container.swal2-center-left > .swal2-popup,
  .swal2-container.swal2-center-start > .swal2-popup {
    grid-row: 2;
    align-self: center;
  }
  .swal2-container.swal2-center > .swal2-popup {
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
  }
  .swal2-container.swal2-center-end > .swal2-popup,
  .swal2-container.swal2-center-right > .swal2-popup {
    grid-column: 3;
    grid-row: 2;
    align-self: center;
    justify-self: end;
  }
  .swal2-container.swal2-bottom-left > .swal2-popup,
  .swal2-container.swal2-bottom-start > .swal2-popup {
    grid-column: 1;
    grid-row: 3;
    align-self: end;
  }
  .swal2-container.swal2-bottom > .swal2-popup {
    grid-column: 2;
    grid-row: 3;
    justify-self: center;
    align-self: end;
  }
  .swal2-container.swal2-bottom-end > .swal2-popup,
  .swal2-container.swal2-bottom-right > .swal2-popup {
    grid-column: 3;
    grid-row: 3;
    align-self: end;
    justify-self: end;
  }
  .swal2-container.swal2-grow-fullscreen > .swal2-popup,
  .swal2-container.swal2-grow-row > .swal2-popup {
    grid-column: 1/4;
    width: 100%;
  }
  .swal2-container.swal2-grow-column > .swal2-popup,
  .swal2-container.swal2-grow-fullscreen > .swal2-popup {
    grid-row: 1/4;
    align-self: stretch;
  }
  .swal2-container.swal2-no-transition {
    transition: none !important;
  }
  .swal2-popup {
    display: none;
    position: relative;
    box-sizing: border-box;
    grid-template-columns: minmax(0, 100%);
    width: 32em;
    max-width: 100%;
    padding: 0 0 1.25em;
    border: none;
    border-radius: 5px;
    background: #fff;
    color: #545454;
    font-family: inherit;
    font-size: 1rem;
  }
  .swal2-popup:focus {
    outline: 0;
  }
  .swal2-popup.swal2-loading {
    overflow-y: hidden;
  }
  .swal2-title {
    position: relative;
    max-width: 100%;
    margin: 0;
    padding: 0.8em 1em 0;
    color: inherit;
    font-size: 1.875em;
    font-weight: 600;
    text-align: center;
    text-transform: none;
    word-wrap: break-word;
  }
  .swal2-actions {
    display: flex;
    z-index: 1;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: 1.25em auto 0;
    padding: 0;
  }
  .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {
    opacity: 0.4;
  }
  .swal2-actions:not(.swal2-loading) .swal2-styled:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
  .swal2-actions:not(.swal2-loading) .swal2-styled:active {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  }
  .swal2-loader {
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.2em;
    height: 2.2em;
    margin: 0 1.875em;
    animation: swal2-rotate-loading 1.5s linear 0s infinite normal;
    border-width: 0.25em;
    border-style: solid;
    border-radius: 100%;
    border-color: #2778c4 transparent #2778c4 transparent;
  }
  .swal2-styled {
    margin: 0.3125em;
    padding: 0.625em 1.1em;
    transition: box-shadow 0.1s;
    box-shadow: 0 0 0 3px transparent;
    font-weight: 500;
  }
  .swal2-styled:not([disabled]) {
    cursor: pointer;
  }
  .swal2-styled.swal2-confirm {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #7066e0;
    color: #fff;
    font-size: 1em;
  }
  .swal2-styled.swal2-confirm:focus {
    box-shadow: 0 0 0 3px rgba(112, 102, 224, 0.5);
  }
  .swal2-styled.swal2-deny {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #dc3741;
    color: #fff;
    font-size: 1em;
  }
  .swal2-styled.swal2-deny:focus {
    box-shadow: 0 0 0 3px rgba(220, 55, 65, 0.5);
  }
  .swal2-styled.swal2-cancel {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #6e7881;
    color: #fff;
    font-size: 1em;
  }
  .swal2-styled.swal2-cancel:focus {
    box-shadow: 0 0 0 3px rgba(110, 120, 129, 0.5);
  }
  .swal2-styled.swal2-default-outline:focus {
    box-shadow: 0 0 0 3px rgba(100, 150, 200, 0.5);
  }
  .swal2-styled:focus {
    outline: 0;
  }
  .swal2-styled::-moz-focus-inner {
    border: 0;
  }
  .swal2-footer {
    justify-content: center;
    margin: 1em 0 0;
    padding: 1em 1em 0;
    border-top: 1px solid #eee;
    color: inherit;
    font-size: 1em;
  }
  .swal2-timer-progress-bar-container {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    grid-column: auto !important;
    overflow: hidden;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .swal2-timer-progress-bar {
    width: 100%;
    height: 0.25em;
    background: rgba(0, 0, 0, 0.2);
  }
  .swal2-image {
    max-width: 100%;
    margin: 2em auto 1em;
  }
  .swal2-close {
    z-index: 2;
    align-items: center;
    justify-content: center;
    width: 1.2em;
    height: 1.2em;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: -1.2em;
    padding: 0;
    overflow: hidden;
    transition: color 0.1s, box-shadow 0.1s;
    border: none;
    border-radius: 5px;
    background: 0 0;
    color: #ccc;
    font-family: serif;
    font-family: monospace;
    font-size: 2.5em;
    cursor: pointer;
    justify-self: end;
  }
  .swal2-close:hover {
    transform: none;
    background: 0 0;
    color: #f27474;
  }
  .swal2-close:focus {
    outline: 0;
    box-shadow: inset 0 0 0 3px rgba(100, 150, 200, 0.5);
  }
  .swal2-close::-moz-focus-inner {
    border: 0;
  }
  .swal2-html-container {
    z-index: 1;
    justify-content: center;
    margin: 1em 1.6em 0.3em;
    padding: 0;
    overflow: auto;
    color: inherit;
    font-size: 1.125em;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    word-wrap: break-word;
    word-break: break-word;
  }
  .swal2-checkbox,
  .swal2-file,
  .swal2-input,
  .swal2-radio,
  .swal2-select,
  .swal2-textarea {
    margin: 1em 2em 3px;
  }
  .swal2-file,
  .swal2-input,
  .swal2-textarea {
    box-sizing: border-box;
    width: auto;
    transition: border-color 0.1s, box-shadow 0.1s;
    border: 1px solid #d9d9d9;
    border-radius: 0.1875em;
    background: 0 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;
    color: inherit;
    font-size: 1.125em;
  }
  .swal2-file.swal2-inputerror,
  .swal2-input.swal2-inputerror,
  .swal2-textarea.swal2-inputerror {
    border-color: #f27474 !important;
    box-shadow: 0 0 2px #f27474 !important;
  }
  .swal2-file:focus,
  .swal2-input:focus,
  .swal2-textarea:focus {
    border: 1px solid #b4dbed;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);
  }
  .swal2-file::placeholder,
  .swal2-input::placeholder,
  .swal2-textarea::placeholder {
    color: #ccc;
  }
  .swal2-range {
    margin: 1em 2em 3px;
    background: #fff;
  }
  .swal2-range input {
    width: 80%;
  }
  .swal2-range output {
    width: 20%;
    color: inherit;
    font-weight: 600;
    text-align: center;
  }
  .swal2-range input,
  .swal2-range output {
    height: 2.625em;
    padding: 0;
    font-size: 1.125em;
    line-height: 2.625em;
  }
  .swal2-input {
    height: 2.625em;
    padding: 0 0.75em;
  }
  .swal2-file {
    width: 75%;
    margin-right: auto;
    margin-left: auto;
    background: 0 0;
    font-size: 1.125em;
  }
  .swal2-textarea {
    height: 6.75em;
    padding: 0.75em;
  }
  .swal2-select {
    min-width: 50%;
    max-width: 100%;
    padding: 0.375em 0.625em;
    background: 0 0;
    color: inherit;
    font-size: 1.125em;
  }
  .swal2-checkbox,
  .swal2-radio {
    align-items: center;
    justify-content: center;
    background: #fff;
    color: inherit;
  }
  .swal2-checkbox label,
  .swal2-radio label {
    margin: 0 0.6em;
    font-size: 1.125em;
  }
  .swal2-checkbox input,
  .swal2-radio input {
    flex-shrink: 0;
    margin: 0 0.4em;
  }
  .swal2-input-label {
    display: flex;
    justify-content: center;
    margin: 1em auto 0;
  }
  .swal2-validation-message {
    align-items: center;
    justify-content: center;
    margin: 1em 0 0;
    padding: 0.625em;
    overflow: hidden;
    background: #f0f0f0;
    color: #666;
    font-size: 1em;
    font-weight: 300;
  }
  .swal2-validation-message::before {
    content: '!';
    display: inline-block;
    width: 1.5em;
    min-width: 1.5em;
    height: 1.5em;
    margin: 0 0.625em;
    border-radius: 50%;
    background-color: #f27474;
    color: #fff;
    font-weight: 600;
    line-height: 1.5em;
    text-align: center;
  }
  .swal2-icon {
    position: relative;
    box-sizing: content-box;
    justify-content: center;
    width: 5em;
    height: 5em;
    margin: 2.5em auto 0.6em;
    border: 0.25em solid transparent;
    border-radius: 50%;
    border-color: #000;
    font-family: inherit;
    line-height: 5em;
    cursor: default;
    -webkit-user-select: none;
    user-select: none;
  }
  .swal2-icon .swal2-icon-content {
    display: flex;
    align-items: center;
    font-size: 3.75em;
  }
  .swal2-icon.swal2-error {
    border-color: #f27474;
    color: #f27474;
  }
  .swal2-icon.swal2-error .swal2-x-mark {
    position: relative;
    flex-grow: 1;
  }
  .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {
    display: block;
    position: absolute;
    top: 2.3125em;
    width: 2.9375em;
    height: 0.3125em;
    border-radius: 0.125em;
    background-color: #f27474;
  }
  .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {
    left: 1.0625em;
    transform: rotate(45deg);
  }
  .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {
    right: 1em;
    transform: rotate(-45deg);
  }
  .swal2-icon.swal2-error.swal2-icon-show {
    animation: swal2-animate-error-icon 0.5s;
  }
  .swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {
    animation: swal2-animate-error-x-mark 0.5s;
  }
  .swal2-icon.swal2-warning {
    border-color: #facea8;
    color: #f8bb86;
  }
  .swal2-icon.swal2-warning.swal2-icon-show {
    animation: swal2-animate-error-icon 0.5s;
  }
  .swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content {
    animation: swal2-animate-i-mark 0.5s;
  }
  .swal2-icon.swal2-info {
    border-color: #9de0f6;
    color: #3fc3ee;
  }
  .swal2-icon.swal2-info.swal2-icon-show {
    animation: swal2-animate-error-icon 0.5s;
  }
  .swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content {
    animation: swal2-animate-i-mark 0.8s;
  }
  .swal2-icon.swal2-question {
    border-color: #c9dae1;
    color: #87adbd;
  }
  .swal2-icon.swal2-question.swal2-icon-show {
    animation: swal2-animate-error-icon 0.5s;
  }
  .swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content {
    animation: swal2-animate-question-mark 0.8s;
  }
  .swal2-icon.swal2-success {
    border-color: #a5dc86;
    color: #a5dc86;
  }
  .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {
    position: absolute;
    width: 3.75em;
    height: 7.5em;
    transform: rotate(45deg);
    border-radius: 50%;
  }
  .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {
    top: -0.4375em;
    left: -2.0635em;
    transform: rotate(-45deg);
    transform-origin: 3.75em 3.75em;
    border-radius: 7.5em 0 0 7.5em;
  }
  .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {
    top: -0.6875em;
    left: 1.875em;
    transform: rotate(-45deg);
    transform-origin: 0 3.75em;
    border-radius: 0 7.5em 7.5em 0;
  }
  .swal2-icon.swal2-success .swal2-success-ring {
    position: absolute;
    z-index: 2;
    top: -0.25em;
    left: -0.25em;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border: 0.25em solid rgba(165, 220, 134, 0.3);
    border-radius: 50%;
  }
  .swal2-icon.swal2-success .swal2-success-fix {
    position: absolute;
    z-index: 1;
    top: 0.5em;
    left: 1.625em;
    width: 0.4375em;
    height: 5.625em;
    transform: rotate(-45deg);
  }
  .swal2-icon.swal2-success [class^='swal2-success-line'] {
    display: block;
    position: absolute;
    z-index: 2;
    height: 0.3125em;
    border-radius: 0.125em;
    background-color: #a5dc86;
  }
  .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {
    top: 2.875em;
    left: 0.8125em;
    width: 1.5625em;
    transform: rotate(45deg);
  }
  .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {
    top: 2.375em;
    right: 0.5em;
    width: 2.9375em;
    transform: rotate(-45deg);
  }
  .swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {
    animation: swal2-animate-success-line-tip 0.75s;
  }
  .swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {
    animation: swal2-animate-success-line-long 0.75s;
  }
  .swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {
    animation: swal2-rotate-success-circular-line 4.25s ease-in;
  }
  .swal2-progress-steps {
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
    margin: 1.25em auto;
    padding: 0;
    background: 0 0;
    font-weight: 600;
  }
  .swal2-progress-steps li {
    display: inline-block;
    position: relative;
  }
  .swal2-progress-steps .swal2-progress-step {
    z-index: 20;
    flex-shrink: 0;
    width: 2em;
    height: 2em;
    border-radius: 2em;
    background: #2778c4;
    color: #fff;
    line-height: 2em;
    text-align: center;
  }
  .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {
    background: #2778c4;
  }
  .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {
    background: #add8e6;
    color: #fff;
  }
  .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {
    background: #add8e6;
  }
  .swal2-progress-steps .swal2-progress-step-line {
    z-index: 10;
    flex-shrink: 0;
    width: 2.5em;
    height: 0.4em;
    margin: 0 -1px;
    background: #2778c4;
  }
  [class^='swal2'] {
    -webkit-tap-highlight-color: transparent;
  }
  .swal2-show {
    animation: swal2-show 0.3s;
  }
  .swal2-hide {
    animation: swal2-hide 0.15s forwards;
  }
  .swal2-noanimation {
    transition: none;
  }
  .swal2-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }
  .swal2-rtl .swal2-close {
    margin-right: initial;
    margin-left: 0;
  }
  .swal2-rtl .swal2-timer-progress-bar {
    right: 0;
    left: auto;
  }
  .swal2-no-war {
    display: flex;
    position: fixed;
    z-index: 1061;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.375em;
    background: #20232a;
    color: #fff;
    text-align: center;
  }
  .swal2-no-war a {
    color: #61dafb;
    text-decoration: none;
  }
  .swal2-no-war a:hover {
    text-decoration: underline;
  }
  @keyframes swal2-toast-show {
    0% {
      transform: translateY(-0.625em) rotateZ(2deg);
    }
    33% {
      transform: translateY(0) rotateZ(-2deg);
    }
    66% {
      transform: translateY(0.3125em) rotateZ(2deg);
    }
    100% {
      transform: translateY(0) rotateZ(0);
    }
  }
  @keyframes swal2-toast-hide {
    100% {
      transform: rotateZ(1deg);
      opacity: 0;
    }
  }
  @keyframes swal2-toast-animate-success-line-tip {
    0% {
      top: 0.5625em;
      left: 0.0625em;
      width: 0;
    }
    54% {
      top: 0.125em;
      left: 0.125em;
      width: 0;
    }
    70% {
      top: 0.625em;
      left: -0.25em;
      width: 1.625em;
    }
    84% {
      top: 1.0625em;
      left: 0.75em;
      width: 0.5em;
    }
    100% {
      top: 1.125em;
      left: 0.1875em;
      width: 0.75em;
    }
  }
  @keyframes swal2-toast-animate-success-line-long {
    0% {
      top: 1.625em;
      right: 1.375em;
      width: 0;
    }
    65% {
      top: 1.25em;
      right: 0.9375em;
      width: 0;
    }
    84% {
      top: 0.9375em;
      right: 0;
      width: 1.125em;
    }
    100% {
      top: 0.9375em;
      right: 0.1875em;
      width: 1.375em;
    }
  }
  @keyframes swal2-show {
    0% {
      transform: scale(0.7);
    }
    45% {
      transform: scale(1.05);
    }
    80% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes swal2-hide {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
  }
  @keyframes swal2-animate-success-line-tip {
    0% {
      top: 1.1875em;
      left: 0.0625em;
      width: 0;
    }
    54% {
      top: 1.0625em;
      left: 0.125em;
      width: 0;
    }
    70% {
      top: 2.1875em;
      left: -0.375em;
      width: 3.125em;
    }
    84% {
      top: 3em;
      left: 1.3125em;
      width: 1.0625em;
    }
    100% {
      top: 2.8125em;
      left: 0.8125em;
      width: 1.5625em;
    }
  }
  @keyframes swal2-animate-success-line-long {
    0% {
      top: 3.375em;
      right: 2.875em;
      width: 0;
    }
    65% {
      top: 3.375em;
      right: 2.875em;
      width: 0;
    }
    84% {
      top: 2.1875em;
      right: 0;
      width: 3.4375em;
    }
    100% {
      top: 2.375em;
      right: 0.5em;
      width: 2.9375em;
    }
  }
  @keyframes swal2-rotate-success-circular-line {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }
  @keyframes swal2-animate-error-x-mark {
    0% {
      margin-top: 1.625em;
      transform: scale(0.4);
      opacity: 0;
    }
    50% {
      margin-top: 1.625em;
      transform: scale(0.4);
      opacity: 0;
    }
    80% {
      margin-top: -0.375em;
      transform: scale(1.15);
    }
    100% {
      margin-top: 0;
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes swal2-animate-error-icon {
    0% {
      transform: rotateX(100deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes swal2-rotate-loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes swal2-animate-question-mark {
    0% {
      transform: rotateY(-360deg);
    }
    100% {
      transform: rotateY(0);
    }
  }
  @keyframes swal2-animate-i-mark {
    0% {
      transform: rotateZ(45deg);
      opacity: 0;
    }
    25% {
      transform: rotateZ(-25deg);
      opacity: 0.4;
    }
    50% {
      transform: rotateZ(15deg);
      opacity: 0.8;
    }
    75% {
      transform: rotateZ(-5deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0);
      opacity: 1;
    }
  }
  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
    overflow: hidden;
  }
  body.swal2-height-auto {
    height: auto !important;
  }
  body.swal2-no-backdrop .swal2-container {
    background-color: transparent !important;
    pointer-events: none;
  }
  body.swal2-no-backdrop .swal2-container .swal2-popup {
    pointer-events: all;
  }
  body.swal2-no-backdrop .swal2-container .swal2-modal {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  @media print {
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
      overflow-y: scroll !important;
    }
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden='true'] {
      display: none;
    }
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {
      position: static !important;
    }
  }
  body.swal2-toast-shown .swal2-container {
    box-sizing: border-box;
    width: 360px;
    max-width: 100%;
    background-color: transparent;
    pointer-events: none;
  }
  body.swal2-toast-shown .swal2-container.swal2-top {
    top: 0;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translateX(-50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-top-end,
  body.swal2-toast-shown .swal2-container.swal2-top-right {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
  }
  body.swal2-toast-shown .swal2-container.swal2-top-left,
  body.swal2-toast-shown .swal2-container.swal2-top-start {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
  }
  body.swal2-toast-shown .swal2-container.swal2-center-left,
  body.swal2-toast-shown .swal2-container.swal2-center-start {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 0;
    transform: translateY(-50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-center {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-center-end,
  body.swal2-toast-shown .swal2-container.swal2-center-right {
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    transform: translateY(-50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-bottom-left,
  body.swal2-toast-shown .swal2-container.swal2-bottom-start {
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
  }
  body.swal2-toast-shown .swal2-container.swal2-bottom {
    top: auto;
    right: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  body.swal2-toast-shown .swal2-container.swal2-bottom-end,
  body.swal2-toast-shown .swal2-container.swal2-bottom-right {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }
</style>
<style>
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  .App {
    height: 100vh;
    width: 100vw;
  }

  .MuiTableRow-root.MuiTableRow-hover:hover {
    background-color: rgba(30, 136, 299, 0.3) !important;
  }

  /* path color */
  .setColorLine path:nth-child(1) {
    stroke: rgb(100, 0, 100) !important;
  }

  /* text color */
  .setColorLine text textPath:nth-child(1) {
    fill: rgb(100, 0, 100) !important;
  }

  /* set color isPath */
  .setColorPath path:nth-child(1) {
    stroke: rgb(100, 0, 100, 0.6);
  }
  .setColorPath text textPath:nth-child(1) {
    fill: rgb(100, 0, 100, 0.8) !important;
  }

  /* set color isResource */
  .setColorIsResource circle {
    fill: rgba(100, 0, 100, 0.05) !important;
  }
  .setColorIsResource circle:nth-child(1) {
    stroke: rgb(100, 0, 100, 0.1);
  }
  .setColorIsResource circle:nth-child(2) {
    stroke: rgb(100, 0, 100, 0.1);
  }

  /* set color isAction */
  .setColorIsAction circle {
    fill: rgba(100, 0, 100, 0.05) !important;
  }
  .setColorIsAction circle:nth-child(1) {
    stroke: rgb(100, 0, 100, 0.1);
  }
  .setColorIsAction circle:nth-child(2) {
    stroke: rgb(100, 0, 100, 0.1);
  }

  /* set color isSubject */
  .setColorIsSubject circle {
    fill: rgba(100, 0, 100, 0.05) !important;
  }
  .setColorIsSubject circle:nth-child(1) {
    stroke: rgb(100, 0, 100, 0.1);
  }
  .setColorIsSubject circle:nth-child(2) {
    stroke: rgb(100, 0, 100, 0.1);
  }

  .hiddenSpan {
    color: rgb(0, 0, 0, 0);
  }

  /* set color isPath */
  .setColorIsPath circle {
    fill: rgba(100, 0, 100, 0.05) !important;
  }
  .setColorIsPath circle:nth-child(1) {
    stroke: rgb(100, 0, 100, 0.1);
  }
  .setColorIsPath circle:nth-child(2) {
    stroke: rgb(100, 0, 100, 0.1);
  }

  /* text color */
  .setColorOrbit {
    fill: purple !important;
  }

  /* background color */
  .setColorOrbit circle:nth-child(1) {
    stroke: purple;
  }

  /* foreground color */
  .setColorOrbit circle:nth-child(2) {
    stroke: purple;
  }

  /* circle center color */
  .setColorOrbit circle:nth-child(3) {
    fill: rgba(128, 0, 128, 0.2) !important;
  }

  .swal2-container {
    z-index: 1400;
  }

  .addMarkerStart {
    marker-start: url('#arrowheadstart');
  }

  .addMarkerEnd {
    marker-end: url('#arrowheadend');
  }

  .setColorLine .addMarkerStart {
    marker-start: url('#arrowheadstart-hover');
  }

  .setColorLine .addMarkerEnd {
    marker-end: url('#arrowheadend-hover');
  }

  .setColorPath .addMarkerStart {
    marker-start: url('#arrowheadstart-path');
  }

  .setColorPath .addMarkerEnd {
    marker-end: url('#arrowheadend-path');
  }

  .setColorLine .implementEnumLink.addMarkerStart {
    marker-start: url('#arrowheadstart-hover');
  }

  .setColorLine .implementEnumLink.addMarkerEnd {
    marker-end: url('#arrowheadend-hover');
  }

  .implementEnumLink.addMarkerStart {
    marker-start: url('#arrowheadstart-enum');
  }

  .implementEnumLink.addMarkerEnd {
    marker-end: url('#arrowheadend-enum');
  }

  @media (max-width: 1000px) {
    .resizeHeader > div {
      padding: 12px !important;
    }
  }
</style>
<style data-styled="active" data-styled-version="5.3.5">
  .bnsGGz.bnsGGz {
    height: 38px;
    margin: 0 0 0 8px;
    padding: 10px 16px;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: IBM Plex Sans;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: center;
  }
  .eSKtxV.eSKtxV {
    min-width: 289px;
    margin: 10px 0;
    height: 57px;
  }
  .eSKtxV.eSKtxV input {
    height: 20px;
    max-height: 20px;
  }
  .jjAMGT {
    background-color: #fafafa;
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  .kSPgzq {
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .iwQAHH {
    width: 460px;
    max-width: 460px;
    padding: 48px 40px 40px;
    border-radius: 12px;
    background-color: #ffffff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
  }
  .lbWjUG {
    -webkit-flex: 0;
    -ms-flex: 0;
    flex: 0;
    height: 37px;
    font-family: IBM Plex Sans;
    font-size: 28px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000DE;
  }
  .hSYzXj.hSYzXj {
    font-weight: bold;
    color: white;
    width: 100%;
    height: 48px;
    margin: 16px 0 0;
    border-radius: 4px;
    text-align: center;
    background-color: #1e88e5;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .kvfgsf {
    font-weight: bold;
    margin: 5px 0;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
  }
  .kiHCpR {
    -webkit-flex: 0;
    -ms-flex: 0;
    flex: 0;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: center;
    color: #7A7A7A;
  }
  .haPhTe {
    color: #4E4E4E;
    margin: 0 0;
    text-align: left;
    padding-left: 30px;
  }
  .cORoZl {
    margin-top: -16px;
    margin-bottom: -16px;
    box-sizing: border-box;
    width: 100%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .fYdAIW {
    width: 369px;
    max-width: 369px;
    padding: 48px 40px 40px;
    border-radius: 12px;
    background-color: #ffffff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
  }
  .dGBBAf {
    margin-top: -16px;
    margin-bottom: -16px;
    box-sizing: border-box;
    width: 100%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .dfnROZ {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .ktlsKL {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .ksPVCf {
    font-size: 16px;
    color: #1e88e5;
    cursor: pointer;
  }
  .ksPVCf:hover {
    color: #1360a4;
  }
  .bofigo {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin: 16px;
    cursor: pointer;
    position: absolute;
    right: 0px;
  }
  .jtgasY {
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 4%) 0px 2px 6px 0px;
    background-color: rgb(255, 255, 255);
  }
  .bzSbPL {
    padding: 50px;
    background-color: rgb(250, 250, 250);
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
  }
  .jYuKNJ.jYuKNJ {
    min-width: 289px;
    margin: 10px 0px;
  }
  .jYuKNJ.jYuKNJ input {
    height: 20px;
    max-height: 20px;
  }
  .jss1 {
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0 8px;
    overflow: hidden;
    position: absolute;
    border-style: solid;
    border-width: 1px;
    border-radius: inherit;
    pointer-events: none;
  }
  .jss3 {
    width: auto;
    height: 11px;
    display: block;
    padding: 0;
    font-size: 0.9em;
    max-width: 0.01px;
    text-align: left;
    transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    visibility: hidden;
  }
  .jss4 {
    max-width: 1000px;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
  }
  .NdedF {
    margin: 32px 0px 0px;
    display: flex;
    height: 38px;
    -webkit-box-pack: end;
    justify-content: end;
  }
  .glNZrf.glNZrf {
    height: 38px;
    margin: 0px 0px 0px 8px;
    padding: 10px 16px;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: 'IBM Plex Sans';
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
  }
  .css-1gjgmky-MuiToggleButtonGroup-root {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    border-radius: 4px;
  }
</style>
<style data-jss="" data-meta="MuiButtonBase">
  .MuiButtonBase-root {
    color: inherit;
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    padding: 0;
    position: relative;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    -moz-appearance: none;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }
  .MuiButtonBase-root::-moz-focus-inner {
    border-style: none;
  }
  .MuiButtonBase-root.Mui-disabled {
    cursor: default;
    pointer-events: none;
  }
  @media print {
    .MuiButtonBase-root {
      -webkit-print-color-adjust: exact;
    }
  }
</style>
<style data-jss="" data-meta="MuiButton">
  .MuiButton-root {
    color: rgba(0, 0, 0, 0.87);
    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: none;
  }
  .MuiButton-root:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.04);
  }
  .MuiButton-root.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
  }
  @media (hover: none) {
    .MuiButton-root:hover {
      background-color: transparent;
    }
  }
  .MuiButton-root:hover.Mui-disabled {
    background-color: transparent;
  }
  .MuiButton-label {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
  }
  .MuiTouchRipple-root {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
  }
  .eSMNkf.eSMNkf {
    color: #A6A6A6;
    width: 100%;
    height: 48px;
    margin: 8px 0 0;
    border-radius: 4px;
  }
  .MuiButton-text {
    padding: 6px 8px;
  }
  .MuiButton-textPrimary {
    color: #1e88e5;
  }
  .MuiButton-textPrimary:hover {
    background-color: rgba(30, 136, 229, 0.04);
  }
  @media (hover: none) {
    .MuiButton-textPrimary:hover {
      background-color: transparent;
    }
  }
  .MuiButton-textSecondary {
    color: #f50057;
  }
  .MuiButton-textSecondary:hover {
    background-color: rgba(245, 0, 87, 0.04);
  }
  @media (hover: none) {
    .MuiButton-textSecondary:hover {
      background-color: transparent;
    }
  }
  .MuiButton-outlined {
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: 5px 15px;
  }
  .MuiButton-outlined.Mui-disabled {
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
  .MuiButton-outlinedPrimary {
    color: #1e88e5;
    border: 1px solid rgba(30, 136, 229, 0.5);
  }
  .MuiButton-outlinedPrimary:hover {
    border: 1px solid #1e88e5;
    background-color: rgba(30, 136, 229, 0.04);
  }
  @media (hover: none) {
    .MuiButton-outlinedPrimary:hover {
      background-color: transparent;
    }
  }
  .MuiButton-outlinedSecondary {
    color: #f50057;
    border: 1px solid rgba(245, 0, 87, 0.5);
  }
  .MuiButton-outlinedSecondary:hover {
    border: 1px solid #f50057;
    background-color: rgba(245, 0, 87, 0.04);
  }
  .MuiButton-outlinedSecondary.Mui-disabled {
    border: 1px solid rgba(0, 0, 0, 0.26);
  }
  @media (hover: none) {
    .MuiButton-outlinedSecondary:hover {
      background-color: transparent;
    }
  }
  .MuiButton-contained {
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    background-color: #e0e0e0;
  }
  .MuiButton-contained:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: #d5d5d5;
  }
  .MuiButton-contained.Mui-focusVisible {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }
  .MuiButton-contained:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  .MuiButton-contained.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
  @media (hover: none) {
    .MuiButton-contained:hover {
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      background-color: #e0e0e0;
    }
  }
  .MuiButton-contained:hover.Mui-disabled {
    background-color: rgba(0, 0, 0, 0.12);
  }
  .MuiButton-containedPrimary {
    color: #fff;
    background-color: #1e88e5;
  }
  .MuiButton-containedPrimary:hover {
    background-color: rgb(21, 95, 160);
  }
  @media (hover: none) {
    .MuiButton-containedPrimary:hover {
      background-color: #1e88e5;
    }
  }
  .MuiButton-containedSecondary {
    color: #fff;
    background-color: #f50057;
  }
  .MuiButton-containedSecondary:hover {
    background-color: #c51162;
  }
  @media (hover: none) {
    .MuiButton-containedSecondary:hover {
      background-color: #f50057;
    }
  }
  .MuiButton-disableElevation {
    box-shadow: none;
  }
  .MuiButton-disableElevation:hover {
    box-shadow: none;
  }
  .MuiButton-disableElevation.Mui-focusVisible {
    box-shadow: none;
  }
  .MuiButton-disableElevation:active {
    box-shadow: none;
  }
  .MuiButton-disableElevation.Mui-disabled {
    box-shadow: none;
  }
  .MuiButton-colorInherit {
    color: inherit;
    border-color: currentColor;
  }
  .MuiButton-textSizeSmall {
    padding: 4px 5px;
    font-size: 0.8125rem;
  }
  .MuiButton-textSizeLarge {
    padding: 8px 11px;
    font-size: 0.9375rem;
  }
  .MuiButton-outlinedSizeSmall {
    padding: 3px 9px;
    font-size: 0.8125rem;
  }
  .MuiButton-outlinedSizeLarge {
    padding: 7px 21px;
    font-size: 0.9375rem;
  }
  .MuiButton-containedSizeSmall {
    padding: 4px 10px;
    font-size: 0.8125rem;
  }
  .MuiButton-containedSizeLarge {
    padding: 8px 22px;
    font-size: 0.9375rem;
  }
  .MuiButton-fullWidth {
    width: 100%;
  }
  .MuiButton-startIcon {
    display: inherit;
    margin-left: -4px;
    margin-right: 8px;
  }
  .MuiButton-startIcon.MuiButton-iconSizeSmall {
    margin-left: -2px;
  }
  .MuiButton-endIcon {
    display: inherit;
    margin-left: 8px;
    margin-right: -4px;
  }
  .MuiButton-endIcon.MuiButton-iconSizeSmall {
    margin-right: -2px;
  }
  .MuiButton-iconSizeSmall > *:first-child {
    font-size: 18px;
  }
  .MuiButton-iconSizeMedium > *:first-child {
    font-size: 20px;
  }
  .MuiButton-iconSizeLarge > *:first-child {
    font-size: 22px;
  }
</style>
<style data-jss="" data-meta="MuiDialog">
  @media print {
    .MuiDialog-root {
      position: absolute !important;
    }
  }
  .MuiDialog-scrollPaper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .MuiDialog-scrollBody {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }
  .MuiDialog-scrollBody:after {
    width: 0;
    height: 100%;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }
  .MuiDialog-container {
    height: 100%;
    outline: 0;
  }
  @media print {
    .MuiDialog-container {
      height: auto;
    }
  }
  .MuiDialog-paper {
    margin: 32px;
    position: relative;
    overflow-y: auto;
  }
  @media print {
    .MuiDialog-paper {
      box-shadow: none;
      overflow-y: visible;
    }
  }
  .MuiDialog-paperScrollPaper {
    display: flex;
    max-height: calc(100% - 64px);
    flex-direction: column;
  }
  .MuiDialog-paperScrollBody {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
  }
  .MuiDialog-paperWidthFalse {
    max-width: calc(100% - 64px);
  }
  .MuiDialog-paperWidthXs {
    max-width: 444px;
  }
  @media (max-width: 507.95px) {
    .MuiDialog-paperWidthXs.MuiDialog-paperScrollBody {
      max-width: calc(100% - 64px);
    }
  }
  .MuiDialog-paperWidthSm {
    max-width: 600px;
  }
  @media (max-width: 663.95px) {
    .MuiDialog-paperWidthSm.MuiDialog-paperScrollBody {
      max-width: calc(100% - 64px);
    }
  }
  .MuiDialog-paperWidthMd {
    max-width: 960px;
  }
  @media (max-width: 1023.95px) {
    .MuiDialog-paperWidthMd.MuiDialog-paperScrollBody {
      max-width: calc(100% - 64px);
    }
  }
  .MuiDialog-paperWidthLg {
    max-width: 1280px;
  }
  @media (max-width: 1343.95px) {
    .MuiDialog-paperWidthLg.MuiDialog-paperScrollBody {
      max-width: calc(100% - 64px);
    }
  }
  .MuiDialog-paperWidthXl {
    max-width: 1920px;
  }
  @media (max-width: 1983.95px) {
    .MuiDialog-paperWidthXl.MuiDialog-paperScrollBody {
      max-width: calc(100% - 64px);
    }
  }
  .MuiDialog-paperFullWidth {
    width: calc(100% - 64px);
  }
  .MuiDialog-paperFullScreen {
    width: 100%;
    height: 100%;
    margin: 0;
    max-width: 100%;
    max-height: none;
    border-radius: 0;
  }
  .MuiDialog-paperFullScreen.MuiDialog-paperScrollBody {
    margin: 0;
    max-width: 100%;
  }
</style>
<style data-jss="" data-meta="MuiPaper">
.MuiPaper-root {
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
}
.MuiPaper-rounded {
  border-radius: 4px;
}
.MuiPaper-outlined {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation0 {
  box-shadow: none;
}
.MuiPaper-elevation1 {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation2 {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation3 {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation4 {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation5 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation6 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation7 {
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation8 {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation9 {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation10 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation11 {
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation12 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation13 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation14 {
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation15 {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation16 {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation17 {
  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation18 {
  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation19 {
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation20 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation21 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation22 {
  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation23 {
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation24 {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}
</style>
<style data-jss="" data-meta="MuiBackdrop">
  .MuiBackdrop-root {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  }
  .MuiBackdrop-invisible {
    background-color: transparent;
  }
</style>
<style data-jss="" data-meta="MuiInputBase">
  @-webkit-keyframes mui-auto-fill {
  }
  @-webkit-keyframes mui-auto-fill-cancel {
  }
  .MuiInputBase-root {
    color: rgba(0, 0, 0, 0.87);
    cursor: text;
    position: relative;
    font-size: 1rem;
    box-sizing: border-box;
    align-items: center;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.1876em;
    letter-spacing: 0.00938em;
  }
  .MuiInputBase-root.Mui-disabled {
    color: rgba(0, 0, 0, 0.38);
    cursor: default;
  }
  .MuiInputBase-multiline {
    padding: 6px 0 7px;
  }
  .MuiInputBase-multiline.MuiInputBase-marginDense {
    padding-top: 3px;
  }
  .MuiInputBase-fullWidth {
    width: 100%;
  }
  .MuiInputBase-input {
    font: inherit;
    color: currentColor;
    width: 261px;
    border: 0;
    height: 1.1876em;
    margin: 0;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    animation-name: mui-auto-fill-cancel;
    letter-spacing: inherit;
    animation-duration: 10ms;
    -webkit-tap-highlight-color: transparent;
  }
  .MuiInputBase-input::-webkit-input-placeholder {
    color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .MuiInputBase-input::-moz-placeholder {
    color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .MuiInputBase-input:-ms-input-placeholder {
    color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .MuiInputBase-input::-ms-input-placeholder {
    color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .MuiInputBase-input:focus {
    outline: 0;
  }
  .MuiInputBase-input:invalid {
    box-shadow: none;
  }
  .MuiInputBase-input::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  .MuiInputBase-input.Mui-disabled {
    opacity: 1;
  }
  .MuiInputBase-input:-webkit-autofill {
    animation-name: mui-auto-fill;
    animation-duration: 5000s;
  }
  label[data-shrink='false'] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {
    opacity: 0 !important;
  }
  label[data-shrink='false'] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {
    opacity: 0 !important;
  }
  label[data-shrink='false'] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {
    opacity: 0 !important;
  }
  label[data-shrink='false'] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {
    opacity: 0 !important;
  }
  label[data-shrink='false'] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {
    opacity: 0.42;
  }
  label[data-shrink='false'] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {
    opacity: 0.42;
  }
  label[data-shrink='false'] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {
    opacity: 0.42;
  }
  label[data-shrink='false'] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {
    opacity: 0.42;
  }
  .MuiInputBase-inputMarginDense {
    padding-top: 3px;
  }
  .MuiInputBase-inputMultiline {
    height: auto;
    resize: none;
    padding: 0;
  }
  .MuiInputBase-inputTypeSearch {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
  }
</style>
<style data-jss="" data-meta="MuiFormControl">
  .MuiFormControl-root {
    border: 0;
    margin: 0;
    display: inline-flex;
    padding: 0;
    position: relative;
    min-width: 0;
    flex-direction: column;
    vertical-align: top;
  }
  .MuiFormControl-marginNormal {
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .MuiFormControl-marginDense {
    margin-top: 8px;
    margin-bottom: 4px;
  }
  .MuiFormControl-fullWidth {
    width: 100%;
  }
</style>
<style data-jss="" data-meta="MuiFormLabel">
  .MuiFormLabel-root {
    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
  }
  .MuiFormLabel-root.Mui-focused {
    color: #1e88e5;
  }
  .MuiFormLabel-root.Mui-disabled {
    color: rgba(0, 0, 0, 0.38);
  }
  .MuiFormLabel-root.Mui-error {
    color: #f44336;
  }
  .MuiFormLabel-colorSecondary.Mui-focused {
    color: #f50057;
  }
  .MuiFormLabel-asterisk.Mui-error {
    color: #f44336;
  }
</style>
<style data-jss="" data-meta="MuiInputLabel">
  .MuiInputLabel-root {
    display: block;
    transform-origin: top left;
  }
  .MuiInputLabel-formControl {
    top: 0;
    left: 0;
    position: absolute;
    transform: translate(0, 24px) scale(1);
  }
  .MuiInputLabel-marginDense {
    transform: translate(0, 21px) scale(1);
  }
  .MuiInputLabel-shrink {
    transform: translate(0, 1.5px) scale(0.75);
    transform-origin: top left;
    font-size: 18px; /**/
  }
  .MuiInputLabel-animated {
    transition: color 200ms cubic-bezier(0, 0, 0.2, 0.9) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 0.9) 0ms;
  }
  .MuiInputLabel-filled {
    z-index: 1;
    transform: translate(12px, 20px) scale(1);
    pointer-events: none;
  }
  .MuiInputLabel-filled.MuiInputLabel-marginDense {
    transform: translate(12px, 17px) scale(1);
  }
  .MuiInputLabel-filled.MuiInputLabel-shrink {
    transform: translate(12px, 10px) scale(0.75);
  }
  .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense {
    transform: translate(12px, 7px) scale(0.75);
  }
  .MuiInputLabel-outlined {
    z-index: 1;
    transform: translate(14px, 20px) scale(1);
    pointer-events: none;
  }
  .MuiInputLabel-outlined.MuiInputLabel-marginDense {
    transform: translate(14px, 12px) scale(1);
  }
  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -6px) scale(0.75);
  }
</style>
<style data-jss="" data-meta="PrivateNotchedOutline">
  .PrivateNotchedOutline-root-1 {
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0 8px;
    overflow: hidden;
    position: absolute;
    border-style: solid;
    border-width: 1px;
    border-radius: inherit;
    pointer-events: none;
  }
  .PrivateNotchedOutline-legend-2 {
    padding: 0;
    text-align: left;
    transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    line-height: 11px;
  }
  .PrivateNotchedOutline-legendLabelled-3 {
    width: auto;
    height: 11px;
    display: block;
    padding: 0;
    font-size: 0.75em;
    max-width: 0.01px;
    text-align: left;
    transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    visibility: hidden;
  }
  .PrivateNotchedOutline-legendLabelled-3 > span {
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
  }
  .PrivateNotchedOutline-legendNotched-4 {
    max-width: 1000px;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
  }
</style>
<style data-jss="" data-meta="MuiOutlinedInput">
  .MuiOutlinedInput-root {
    position: relative;
    border-radius: 4px;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.87);
  }
  @media (hover: none) {
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: rgba(0, 0, 0, 0.23);
    }
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #1e88e5;
    border-width: 2px;
  }
  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #f44336;
  }
  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.26);
  }
  .MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #f50057;
  }
  .MuiOutlinedInput-adornedStart {
    padding-left: 14px;
  }
  .MuiOutlinedInput-adornedEnd {
    padding-right: 14px;
  }
  .MuiOutlinedInput-multiline {
    padding: 18.5px 14px;
  }
  .MuiOutlinedInput-multiline.MuiOutlinedInput-marginDense {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.23);
  }
  .MuiOutlinedInput-input {
    padding: 18.5px 14px;
  }
  .MuiOutlinedInput-input:-webkit-autofill {
    border-radius: inherit;
  }
  .MuiOutlinedInput-inputMarginDense {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
  }
  .MuiOutlinedInput-inputMultiline {
    padding: 0;
  }
  .MuiOutlinedInput-inputAdornedStart {
    padding-left: 0;
  }
  .MuiOutlinedInput-inputAdornedEnd {
    padding-right: 0;
  }
</style>
<style data-jss="" data-meta="MuiTextField"></style>
</head>
  <body>
      <%- body %>
      <script src="/script/loginPage.js"></script>
      <script src="/script/consentPage.js"></script>
  </body>
</html>`;
