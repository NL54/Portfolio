import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.d8d0c8e8.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.e86e8abf.mjs';
import { $ as $$ContactCTA } from './_...slug_.astro.015efb86.mjs';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                               */
const $$Astro = createAstro("https://NL54.github.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Nicolas Lim", "description": "About Me", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 astro-KH7BTL4R">
		<main class="wrapper about astro-KH7BTL4R">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Learn more about my background and skills", "class": "astro-KH7BTL4R" })}

			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Background</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">
						 I'm a 3-year engineering french student, including a double degree year in Canada.
					</p>
					<p class="astro-KH7BTL4R">
						I started by doing a CPGE in PSI to finish at ENSEM in computer science and decided to specialize in video games during my double degree.
					</p>
					<p class="astro-KH7BTL4R">
						I'm a regular casual player of online video games such as Riot Games's games or other games like Divinity: Orginal Sin 2. I also really enjoy board games. 
					</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Education</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">2018 - 2020 CPGE PSI (Physics and Engineering Sciences ).</p>
					<p class="astro-KH7BTL4R">2020 - 2023 ENSEM : ISN (Computer and Digital Sciences).</p>
					<p class="astro-KH7BTL4R">2022 - 2023 Double degree : UQAC computer science sector, specializing in video games.</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Skills</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R"> curious, teamwork, logical and critical, thoughtful, assiduous, committed </p>

				</div>
			</section>
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-KH7BTL4R" })}
	</div>
` })}`;
}, "C:/Users/Nico/portfolio/src/pages/about.astro");

const $$file = "C:/Users/Nico/portfolio/src/pages/about.astro";
const $$url = "/portfolio/about";

export { $$About as default, $$file as file, $$url as url };
