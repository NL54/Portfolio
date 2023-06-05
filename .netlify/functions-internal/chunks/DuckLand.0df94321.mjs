import { k as createVNode, F as Fragment, s as spreadAttributes } from './astro.d8d0c8e8.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p><em><strong>Description :</strong></em></p>\n<p>This virtual reality game is a serious game in which we’ve created two mini-games to help\nrehabilitate patients’arms. The two games are a wack-a-mole game and a duck-fishing game.</p>\n<p><em><strong>GitHub Repository :</strong></em> <a href=\"https://github.com/Lulios/DuckLand\">https://github.com/Lulios/DuckLand</a></p>");

				const frontmatter = {"title":"DuckLand","publishDate":"2023-04-01T00:00:00.000Z","img":"/assets/DuckLand.png","img_alt":"Le Roi des canards","description":"We've created a serious game for arm rehabilitation as part of our VR gaming course.\nIn this game, different exercises are implemented in the form of mini-games with lots of ducks\nto make rehabilitation more fun.\n","tags":["Dev","C#","Virtual reality","Unity VR","GitHub","Serious Game"]};
				const file = "C:/Users/Nico/portfolio/src/content/work/DuckLand.md";
				const url = undefined;
				function rawContent() {
					return "***Description :*** \n\nThis virtual reality game is a serious game in which we've created two mini-games to help \nrehabilitate patients'arms. The two games are a wack-a-mole game and a duck-fishing game.\n\n***GitHub Repository :*** https://github.com/Lulios/DuckLand";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
