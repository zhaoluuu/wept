"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const typescript=()=>require("./typescript"),sass=()=>require("./sass"),less=()=>require("./less"),enhance=()=>require("./enhance"),terser=()=>require("./terser"),javascript=()=>require("./base/javascript"),wxss=()=>require("./base/wxss"),es6module=()=>require("./base/es6module"),minifywxml=()=>require("./minifywxml"),worklet=()=>require("./worklet"),plugins={typescript:typescript,less:less,sass:sass,enhance:enhance,javascript:javascript,terser:terser,wxss:wxss,es6module:es6module,minifywxml:minifywxml,worklet:worklet};exports.default={load:e=>e in plugins?plugins[e]().default:null};