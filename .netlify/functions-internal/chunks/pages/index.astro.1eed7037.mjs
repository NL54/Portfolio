import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.d8d0c8e8.mjs';
import { g as getCollection, a as $$Pill, b as $$CallToAction, $ as $$ContactCTA } from './_...slug_.astro.015efb86.mjs';
import { b as $$Hero, $ as $$Icon, a as $$BaseLayout } from './404.astro.e86e8abf.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$2 = createAstro("https://NL54.github.io");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute([["grid", { offset: variant === "offset", small: variant === "small" }], "astro-VC5TSDMU"], "class:list")}>
	${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "C:/Users/Nico/portfolio/src/components/Grid.astro");

const $$Astro$1 = createAstro("https://NL54.github.io");
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead($$result)}<a class="card astro-LGKM4U2A"${addAttribute(`/work/${slug}`, "href")}>
	<span class="title astro-LGKM4U2A">${data.title}</span>
	<img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-LGKM4U2A">
</a>`;
}, "C:/Users/Nico/portfolio/src/components/PortfolioPreview.astro");

const $$Astro = createAstro("https://NL54.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">
		<div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">
			<header class="hero astro-J7PV25F6">
				${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, my name is Nicolas Lim", "tagline": "I am a french Gameplay Developer who is currently based in Canada for my last year of study.", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
					<div class="roles astro-J7PV25F6">
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Developer` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} UE5` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Unity` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} C#` })}
					
					</div>
					<div class="roles astro-J7PV25F6">
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} C++` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Java` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Python` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "microphone-stage", "size": "1.33em", "class": "astro-J7PV25F6" })} Teamplay` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "class": "astro-J7PV25F6" })} Writer` })}
					</div>
				` })}

				<img alt="Jeanine White smiling in a red plaid shirt and tortoise shell glasses" width="480" height="620" src="/assets/stock-1.jpg" class="astro-J7PV25F6">
			</header>

		</div>

		<main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">
			<section class="section with-background with-cta astro-J7PV25F6">
				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
					<h3 class="astro-J7PV25F6">Selected Work</h3>
					<p class="astro-J7PV25F6">Take a look below at some of my work from the last year.</p>
				</header>

				<div class="gallery astro-J7PV25F6">
					${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li class="astro-J7PV25F6">
									${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "class": "astro-J7PV25F6" })}
								</li>`)}` })}
				</div>

				<div class="cta astro-J7PV25F6">
					${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
						View All
						${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "class": "astro-J7PV25F6" })}
					` })}
				</div>
			
		</section></main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-J7PV25F6" })}
	</div>
` })}`;
}, "C:/Users/Nico/portfolio/src/pages/index.astro");

const $$file = "C:/Users/Nico/portfolio/src/pages/index.astro";
const $$url = "/portfolio";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i };
