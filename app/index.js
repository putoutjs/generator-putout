/**
 * @fileoverview Main generator (delegates to rule or plugin generator)
 * @author Kevin Partington
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import Generator from "yeoman-generator";
import RuleGenerator from "../rule/index.js";
import PluginGenerator from "../plugin/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // eslint-disable-line no-underscore-dangle

const RULE_GENERATOR_PATH = path.join(__dirname, "..", "rule", "index.js");
const PLUGIN_GENERATOR_PATH = path.join(__dirname, "..", "plugin", "index.js");

//------------------------------------------------------------------------------
// Constructor
//------------------------------------------------------------------------------

export default class extends Generator {
    initializing() {
        this.composeWith({ Generator: PluginGenerator, path: PLUGIN_GENERATOR_PATH });
    }
}
