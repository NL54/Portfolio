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

				const html = updateImageReferences("<p><em><strong>Description :</strong></em></p>\n<p>adzdzazdazdazazdazd</p>\n<p>If you want to test it, don’t hesitate to ask me, I have the build but it is on the perforce of our school.</p>");

				const frontmatter = {"title":"Scale and Forks","publishDate":"2023-03-22T00:00:00.000Z","img":"/assets/ScaleAndForks.png","img_alt":"Iridescent ripples of a bright blue and pink liquid","description":"We created an RTS with a huge inspiration from frostPunk. It was my second big project after A Sacrifice For The\nTurquoise Lord and was the first one with a potential huge workload and with complex mechanics.\n","tags":["C#","Dev","Unity 3D","RTS","Perforce"]};
				const file = "C:/Users/Nico/portfolio/src/content/work/1ScaleAndForks.md";
				const url = undefined;
				function rawContent() {
					return "***Description :*** \n\nadzdzazdazdazazdazd\n\nIf you want to test it, don't hesitate to ask me, I have the build but it is on the perforce of our school.";
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
