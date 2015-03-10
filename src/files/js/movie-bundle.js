import EmmetCodemirror from 'emmet-codemirror';
import CodeMirrorMovie from 'codemirror-movie';
import CodeMirror from 'codemirror';

import 'codemirror/mode/css/css.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';

var emmet = EmmetCodemirror.emmet;
var EmmetEditor = EmmetCodemirror.EmmetEditor;

EmmetCodemirror.setup(CodeMirror);
window.CodeMirror = CodeMirror;
// add 'revert' action to CodeMirror to restore original text and position
CodeMirror.commands.revert = function(editor) {
	if (editor.__initial) {
		editor.setValue(editor.__initial.content);
		editor.setCursor(editor.__initial.pos);
	}
};

CodeMirror.commands.wrapWithAbbreviation = function(editor, abbr) {
	emmet.run('wrap_with_abbreviation', new EmmetEditor(editor), abbr);
};

export {CodeMirror, CodeMirrorMovie, EmmetCodemirror, emmet};