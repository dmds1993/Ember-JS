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
          "line": 2,
          "column": 0
        }
      },
      "moduleName": "library-app/templates/components/nav-link-to.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("a");
      dom.setAttribute(el1,"href","");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      return morphs;
    },
    statements: [
      ["content","yield",["loc",[null,[1,11],[1,20]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));