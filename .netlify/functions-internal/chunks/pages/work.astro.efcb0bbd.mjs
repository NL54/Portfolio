import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.d8d0c8e8.mjs';
import { g as getCollection, $ as $$ContactCTA } from './_...slug_.astro.015efb86.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.e86e8abf.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index.astro.1eed7037.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                               *//* empty css                         *//* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro = createAstro("https://NL54.github.io");
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Jeanine White", "description": "Learn about Jeanine White's most recent projects" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20">
		<main class="wrapper stack gap-8">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "Voici les projets sur lesquels j'ai travaill\xE9", "align": "start" })}
			${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>
							${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })}
						</li>`)}` })}
		</main>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})}
	</div>
` })}`;
}, "C:/Users/Nico/portfolio/src/pages/work.astro");

const $$file = "C:/Users/Nico/portfolio/src/pages/work.astro";
const $$url = "/portfolio/work";

export { $$Work as default, $$file as file, $$url as url };
