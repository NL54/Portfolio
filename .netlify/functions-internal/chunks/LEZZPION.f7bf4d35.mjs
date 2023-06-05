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

				const html = updateImageReferences("<p><em><strong>Description :</strong></em></p>\n<p>For this Game Jam, we had the following constraints</p>\n<p>RNG</p>\n<p>Enigma</p>\n<p>Game in a game</p>\n<p>This game is a mix of mini-games in which we take on the role of a spy whose aim is to find clues\nto identify the culprit behind a crime. To find these clues, he’ll need to pass various tests to\navoid being spotted.</p>\n<p><em><strong>Itch.io link :</strong></em> <a href=\"https://itch.io/jam/wonderjam-uqac-h23/rate/1945140\">https://itch.io/jam/wonderjam-uqac-h23/rate/1945140</a></p>");

				const frontmatter = {"title":"LEZZPION","publishDate":"2023-03-02T00:00:00.000Z","img":"/assets/LEZZPION.png","img_alt":"Soft pink and baby blue water ripples together in a subtle texture.","description":"We developed a game with numerous contraint during a Game Jam in our school. The game Jam lasted \nfor 2 days and it was my second game Jam and the first one that I took as an experimented game dev.\n","tags":["Dev","GameJam","C#","Unity 2D","GitHub"]};
				const file = "C:/Users/Nico/portfolio/src/content/work/LEZZPION.md";
				const url = undefined;
				function rawContent() {
					return "\n***Description :*** \n\nFor this Game Jam, we had the following constraints\n\nRNG\n\nEnigma\n\nGame in a game\n\nThis game is a mix of mini-games in which we take on the role of a spy whose aim is to find clues\nto identify the culprit behind a crime. To find these clues, he'll need to pass various tests to \navoid being spotted.\n\n***Itch.io link :*** https://itch.io/jam/wonderjam-uqac-h23/rate/1945140";
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
