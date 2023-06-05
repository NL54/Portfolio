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

				const html = updateImageReferences("<p><em><strong>Description :</strong></em></p>\n<p>This is a puzzle game whose main mechanic is that each time the player dies,\na temporal double redoes the actions he performed before dying. Meanwhile the player can play\nalongside this double. It’s possible to have multiple doubles but the player has limited lives.</p>\n<p>The aim is to use the temporal doubles wisely to get past the Turquoise Lord’s puzzles.</p>\n<p><em><strong>Itch.io link :</strong></em> <a href=\"https://adam-wizard.itch.io/a-sacrifice-for-the-turquoise-lord\">https://adam-wizard.itch.io/a-sacrifice-for-the-turquoise-lord</a></p>");

				const frontmatter = {"title":"A Sacrifice for the Turquoise Lord","publishDate":"2020-03-04T00:00:00.000Z","img":"/assets/ASFT.PNG","img_alt":"Pearls of silky soft white cotton, bubble up under vibrant lighting","description":"We created a puzzle game as our first experience inwe created this puzzle game as our first experience of video game design.\nThis game has simple mechanics that have allowed us to discover unity2D.\n","tags":["Design","Dev","C#","Puzzle Game","Unity 2D","Perforce"]};
				const file = "C:/Users/Nico/portfolio/src/content/work/nested/TurquoiseLord.md";
				const url = undefined;
				function rawContent() {
					return "***Description :***\n\nThis is a puzzle game whose main mechanic is that each time the player dies,\na temporal double redoes the actions he performed before dying. Meanwhile the player can play\nalongside this double. It's possible to have multiple doubles but the player has limited lives. \n\nThe aim is to use the temporal doubles wisely to get past the Turquoise Lord's puzzles.\n\n***Itch.io link :*** https://adam-wizard.itch.io/a-sacrifice-for-the-turquoise-lord";
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
