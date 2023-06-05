import { g as createCollectionToGlobResultMap, h as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.d8d0c8e8.mjs';
import { $ as $$Icon, a as $$BaseLayout, b as $$Hero } from './404.astro.e86e8abf.mjs';
/* empty css                           *//* empty css                           *//* empty css                               */
// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/1ScaleAndForks.md": () => import('../1ScaleAndForks.1fa554ca.mjs'),"/src/content/work/DuckLand.md": () => import('../DuckLand.db66b01e.mjs'),"/src/content/work/LEZZPION.md": () => import('../LEZZPION.bc7a3169.mjs'),"/src/content/work/nested/TurquoiseLord.md": () => import('../TurquoiseLord.6bf2994d.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"duckland":"/src/content/work/DuckLand.md","1scaleandforks":"/src/content/work/1ScaleAndForks.md","lezzpion":"/src/content/work/LEZZPION.md","nested/turquoiselord":"/src/content/work/nested/TurquoiseLord.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/1ScaleAndForks.md": () => import('../1ScaleAndForks.dc9c894a.mjs'),"/src/content/work/DuckLand.md": () => import('../DuckLand.d730cd48.mjs'),"/src/content/work/LEZZPION.md": () => import('../LEZZPION.57e306fe.mjs'),"/src/content/work/nested/TurquoiseLord.md": () => import('../TurquoiseLord.79c70040.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$3 = createAstro("https://NL54.github.io");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")} class="astro-BALV45LP">${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/Nico/portfolio/src/components/CallToAction.astro");

const $$Astro$2 = createAstro("https://NL54.github.io");
const $$Pill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead($$result)}<div class="pill astro-2QEYWK4B">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/Nico/portfolio/src/components/Pill.astro");

const $$Astro$1 = createAstro("https://NL54.github.io");
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead($$result)}<aside class="astro-RCDZUQ3A">
	<h2 class="astro-RCDZUQ3A">Interested in working together?</h2>
	${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "nicolas-alicia@hotmail.com", "class": "astro-RCDZUQ3A" }, { "default": ($$result2) => renderTemplate`
		Send Me a Message
		${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "class": "astro-RCDZUQ3A" })}
	` })}
</aside>`;
}, "C:/Users/Nico/portfolio/src/components/ContactCTA.astro");

const $$Astro = createAstro("https://NL54.github.io");
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "class": "astro-QWEKCIQP" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 astro-QWEKCIQP">
		<div class="stack gap-15 astro-QWEKCIQP">
			<header class="astro-QWEKCIQP">
				<div class="wrapper stack gap-2 astro-QWEKCIQP">
					<a class="back-link astro-QWEKCIQP" href="/work/">${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "class": "astro-QWEKCIQP" })} Work</a>
					${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "class": "astro-QWEKCIQP" }, { "default": ($$result3) => renderTemplate`
						<div class="details astro-QWEKCIQP">
							<div class="tags astro-QWEKCIQP">
								${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-QWEKCIQP" }, { "default": ($$result4) => renderTemplate`${t}` })}`)}
							</div>
							<p class="description astro-QWEKCIQP">${entry.data.description}</p>
						</div>
					` })}
				</div>
			</header>
			<main class="wrapper astro-QWEKCIQP">
				<div class="stack gap-10 content astro-QWEKCIQP">
					${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} class="astro-QWEKCIQP">`}
					<div class="content astro-QWEKCIQP">
						${renderComponent($$result2, "Content", Content, { "class": "astro-QWEKCIQP" })}
					</div>
				</div>
			</main>
		</div>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-QWEKCIQP" })}
	</div>
` })}`;
}, "C:/Users/Nico/portfolio/src/pages/work/[...slug].astro");

const $$file = "C:/Users/Nico/portfolio/src/pages/work/[...slug].astro";
const $$url = "/portfolio/work/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactCTA as $, ____slug_ as _, $$Pill as a, $$CallToAction as b, getCollection as g };
