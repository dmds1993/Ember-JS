export default Ember.HTMLBars.template((function() {
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
          "line": 22,
          "column": 0
        }
      },
      "moduleName": "library-app/templates/admin/seeder.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("Seeder, our Data Center");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-md-4");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-md-4");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-md-4");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
      morphs[3] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[4] = dom.createMorphAt(fragment,6,6,contextualElement);
      return morphs;
    },
    statements: [
      ["inline","number-box",[],["title","Libraries","number",["subexpr","@mut",[["get","libraries.length",["loc",[null,[4,62],[4,78]]],0,0,0,0]],[],[],0,0]],["loc",[null,[4,24],[4,80]]],0,0],
      ["inline","number-box",[],["title","Authors","number",["subexpr","@mut",[["get","authors.length",["loc",[null,[5,60],[5,74]]],0,0,0,0]],[],[],0,0]],["loc",[null,[5,24],[5,76]]],0,0],
      ["inline","number-box",[],["title","Books","number",["subexpr","@mut",[["get","books.length",["loc",[null,[6,58],[6,70]]],0,0,0,0]],[],[],0,0]],["loc",[null,[6,24],[6,72]]],0,0],
      ["inline","seeder-block",[],["sectionTitle","Libraries","generateAction","generateLibraries","deleteAction","deleteLibraries","createReady",["subexpr","@mut",[["get","libDone",["loc",[null,[13,16],[13,23]]],0,0,0,0]],[],[],0,0],"deleteReady",["subexpr","@mut",[["get","libDelDone",["loc",[null,[14,16],[14,26]]],0,0,0,0]],[],[],0,0]],["loc",[null,[9,0],[14,28]]],0,0],
      ["inline","seeder-block",[],["sectionTitle","Authors with Books","generateAction","generateBooksAndAuthors","deleteAction","deleteBooksAndAuthors","createReady",["subexpr","@mut",[["get","authDone",["loc",[null,[20,16],[20,24]]],0,0,0,0]],[],[],0,0],"deleteReady",["subexpr","@mut",[["get","authDelDone",["loc",[null,[21,16],[21,27]]],0,0,0,0]],[],[],0,0]],["loc",[null,[16,0],[21,29]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));