/**
 * @license
 * Milo IDE
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Plot blocks for Milo (github.com/4and4/MiloServer).
 *
 *
 * @author Arjun Rao, Ayush Bihani
 */

'use strict';
goog.provide('Blockly.JavaScript.image');
goog.require('Blockly.JavaScript');

Blockly.JavaScript.img_from_url = function(block) {
    var arg0 = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''";
    var code = 'imgFromURL('+ arg0 +')';
    return [code,Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.img_from_webcam = function(block) {
    var code = 'WebCam.image';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.mobilenet_label = function(block) {
    const zero = "";
    var arg0 = Blockly.JavaScript.valueToCode(block, 'IMG', Blockly.JavaScript.ORDER_NONE) || zero;
    if (arg0 == zero) return ["",Blockly.JavaScript.ORDER_ATOMIC];
    var code = 'MobileNet.classify(\n\t'+ arg0 +'\n);\n';
    return code;
};

Blockly.JavaScript.img_show = function(block) {
    const zero = "";
    var arg0 = Blockly.JavaScript.valueToCode(block, 'IMG', Blockly.JavaScript.ORDER_NONE) || zero;
    if (arg0 == zero) return ["",Blockly.JavaScript.ORDER_ATOMIC];
    var code = '\nimgShow('+ arg0 +');\n';
    return code;
};
