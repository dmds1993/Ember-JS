export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 13,
            "column": 4
          },
          "end": {
            "line": 13,
            "column": 50
          }
        },
        "moduleName": "library-app/templates/components/seeder-block.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Created!");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 16,
            "column": 4
          },
          "end": {
            "line": 16,
            "column": 50
          }
        },
        "moduleName": "library-app/templates/components/seeder-block.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Deleted!");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.9.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 20,
          "column": 0
        }
      },
      "moduleName": "library-app/templates/components/seeder-block.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","well well-sm extra-padding-bottom");
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","form-inline");
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"class","control-label");
      var el5 = dom.createTextNode("Number of new records:");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"class","btn btn-primary");
      var el4 = dom.createTextNode("Generate ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"class","btn btn-danger");
      var el4 = dom.createTextNode("Delete All ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [3]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element1, [3]);
      var element4 = dom.childAt(element1, [7]);
      var morphs = new Array(10);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
      morphs[1] = dom.createAttrMorph(element2, 'class');
      morphs[2] = dom.createMorphAt(element2,3,3);
      morphs[3] = dom.createAttrMorph(element3, 'disabled');
      morphs[4] = dom.createElementMorph(element3);
      morphs[5] = dom.createMorphAt(element3,1,1);
      morphs[6] = dom.createMorphAt(element1,5,5);
      morphs[7] = dom.createElementMorph(element4);
      morphs[8] = dom.createMorphAt(element4,1,1);
      morphs[9] = dom.createMorphAt(element1,9,9);
      return morphs;
    },
    statements: [
      ["content","sectionTitle",["loc",[null,[3,6],[3,22]]],0,0,0,0],
      ["attribute","class",["concat",["form-group has-feedback ",["subexpr","unless",[["get","isCounterValid",["loc",[null,[7,49],[7,63]]],0,0,0,0],"has-error"],[],["loc",[null,[7,40],[7,77]]],0,0]],0,0,0,0,0],0,0,0,0],
      ["inline","input",[],["value",["subexpr","@mut",[["get","counter",["loc",[null,[9,20],[9,27]]],0,0,0,0]],[],[],0,0],"class","form-control","placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[9,61],[9,72]]],0,0,0,0]],[],[],0,0]],["loc",[null,[9,6],[9,74]]],0,0],
      ["attribute","disabled",["subexpr","if",[["get","isCounterValid",["loc",[null,[12,78],[12,92]]],0,0,0,0],false,true],[],["loc",[null,[null,null],[12,105]]],0,0],0,0,0,0],
      ["element","action",["generateAction"],[],["loc",[null,[12,36],[12,63]]],0,0],
      ["content","sectionTitle",["loc",[null,[12,115],[12,131]]],0,0,0,0],
      ["block","fader-label",[],["isShowing",["subexpr","@mut",[["get","createReady",["loc",[null,[13,29],[13,40]]],0,0,0,0]],[],[],0,0]],0,null,["loc",[null,[13,4],[13,66]]]],
      ["element","action",["deleteAction"],[],["loc",[null,[15,35],[15,60]]],0,0],
      ["content","sectionTitle",["loc",[null,[15,72],[15,88]]],0,0,0,0],
      ["block","fader-label",[],["isShowing",["subexpr","@mut",[["get","deleteReady",["loc",[null,[16,29],[16,40]]],0,0,0,0]],[],[],0,0]],1,null,["loc",[null,[16,4],[16,66]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));