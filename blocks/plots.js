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

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.defineBlocksWithJsonArray([{
  "type": "plot_scatter",
  "lastDummyAlign0": "RIGHT",
  "message0": "Scatter %1 X %2 Y %3 Label %4 Group By %5 Color %6 %7 Draw Line %8",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "CLASS",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "field_colour",
      "name": "HUE",
      "colour": "#ffffff"
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "Connect",
      "checked": true
    }
  ],
  "inputsInline": false,
  "previousStatement": "PlotData",
  "nextStatement": "PlotData",
  "colour": "%{BKY_SCATTER_HUE}",
  "tooltip": "Set plot options",
  "helpUrl": ""
},
{
  "type": "plot_bar",
  "lastDummyAlign0": "RIGHT",
  "message0": "Bar %1 X %2 Y %3 Label %4 Group By %5 Color %6 %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "CLASS",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "field_colour",
      "name": "HUE",
      "colour": "#ffffff"
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": "PlotData",
  "nextStatement": "PlotData",
  "colour": "%{BKY_SCATTER_HUE}",
  "tooltip": "Set plot options",
  "helpUrl": ""
},
{
  "type": "plot_histogram",
  "lastDummyAlign0": "RIGHT",
  "message0": "Histogram Plot %1 X %2 Label %3 Color %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "field_colour",
      "name": "HUE",
      "colour": "#ffffff"
    }
  ],
  "inputsInline": false,
  "previousStatement": "PlotData",
  "nextStatement": "PlotData",
  "colour": "%{BKY_SCATTER_HUE}",
  "tooltip": "Histogram",
  "helpUrl": ""
},
{
  "type": "plot_box",
  "lastDummyAlign0": "RIGHT",
  "message0": "Box Plot %1 Data %2 Label %3 Color %4 %5 Horizontal %6 %7 Show Points %8",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "field_colour",
      "name": "HUE",
      "colour": "#ffffff"
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "HORIZONTAL",
      "align": "RIGHT",
      "checked": false
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "POINTS",
      "align": "RIGHT",
      "checked": true
    }
  ],
  "inputsInline": false,
  "previousStatement": "PlotData",
  "nextStatement": "PlotData",
  "colour": "%{BKY_SCATTER_HUE}",
  "tooltip": "Histogram",
  "helpUrl": ""
},
{
  "type": "plot_title",
  "message0": "Set Plot Title %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "My Plot"
    }
  ],
  "previousStatement": "PlotConfig",
  "nextStatement": "PlotConfig",
  "colour": "%{BKY_PLOT_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "plot_x_title",
  "message0": "Set X Axis Label %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "My Plot"
    }
  ],
  "previousStatement": "PlotConfig",
  "nextStatement": "PlotConfig",
  "colour": "%{BKY_PLOT_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "plot_y_title",
  "message0": "Set Y Axis Label %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "My Plot"
    }
  ],
  "previousStatement": "PlotConfig",
  "nextStatement": "PlotConfig",
  "colour": "%{BKY_PLOT_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "plot_canvas",
  "message0": "Predict numbers",
  "setOutput":"image",
  "colour": "%{BKY_PLOT_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "plot_show",
  "message0": "Plot %1 Options %2",
  "args0": [
    {
      "type": "input_statement",
      "name": "DATA",
      "check": "PlotData",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "Options",
      "check": "PlotConfig"
    }
  ],
  "previousStatement":null,
  "nextStatement":null,
  "colour": "%{BKY_PLOT_HUE}",
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.Blocks['function_plot'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Y =");
    this.setColour(230);
    this.setPreviousStatement(true);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['function_plot_x_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("x");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['function_plot_y'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" Y =");
    this.appendDummyInput()
        .appendField("Evaluate X from");
    this.appendDummyInput()
        .appendField("range ")
        .appendField(new Blockly.FieldNumber(0), "range_min")
        .appendField("to ")
        .appendField(new Blockly.FieldNumber(0), "range_max");
    this.appendDummyInput()
        .appendField("Increment by")
        .appendField(new Blockly.FieldNumber(0), "increment");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Mx + c Straight line");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['straight_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "slope")
        .appendField("x +")
        .appendField(new Blockly.FieldNumber(0), "constant");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Used to plot y=mx+c");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['plot_distributions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Probability Function");
    this.appendValueInput("F")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("f(x)");
    this.appendValueInput("LABEL")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Label");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color")
        .appendField(new Blockly.FieldColour("#ffffff"), "COLOR");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
