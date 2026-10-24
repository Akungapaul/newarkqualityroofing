// Roof Repair Newark NJ photo gallery.
//
// History: built 2026-10-23 for the restructure (Cora run 261014) at 142
// images to serve the run's image lines to goal. POP pass 2026-10-24
// (report 1982649, Paul's direction): POP's image range for this page is
// 4-19, so the gallery was cut to the 14 strongest photographs (six
// before-and-after pairs plus two consultation photographs). With the
// hero and Who-section images the page carries 16 images in main content.
// Every file is drawn from the site's existing ZimmWriter v2 image pool;
// every ALT is a factual roof-repair description of the image.

export interface GalleryImage { src: string; alt: string }

export const NEWARK_REPAIR_GALLERY: GalleryImage[] = [
  { src: "/images/gallery/gallery-before-aged-roof.webp", alt: "Roof repair in Newark: aged roof surface before repair work begins" },
  { src: "/images/gallery/gallery-after-aged-roof.webp", alt: "Roof repair in Newark: aged roof surface after the repair is completed" },
  { src: "/images/gallery/gallery-before-commercial-membrane.webp", alt: "Roof repair in Newark: commercial membrane roof before repair work begins" },
  { src: "/images/gallery/gallery-after-commercial-membrane.webp", alt: "Roof repair in Newark: commercial membrane roof after the repair is completed" },
  { src: "/images/gallery/gallery-before-commercial-ponding.webp", alt: "Roof repair in Newark: commercial flat roof with ponding water before repair work begins" },
  { src: "/images/gallery/gallery-after-commercial-ponding.webp", alt: "Roof repair in Newark: commercial flat roof with ponding water after the repair is completed" },
  { src: "/images/gallery/gallery-before-leak-damage.webp", alt: "Roof repair in Newark: roof with leak damage before repair work begins" },
  { src: "/images/gallery/gallery-after-leak-damage.webp", alt: "Roof repair in Newark: roof with leak damage after the repair is completed" },
  { src: "/images/gallery/gallery-before-residential-shingles.webp", alt: "Roof repair in Newark: residential asphalt shingle roof before repair work begins" },
  { src: "/images/gallery/gallery-after-residential-shingles.webp", alt: "Roof repair in Newark: residential asphalt shingle roof after the repair is completed" },
  { src: "/images/gallery/gallery-before-storm-damage.webp", alt: "Roof repair in Newark: roof with storm damage before repair work begins" },
  { src: "/images/gallery/gallery-after-storm-damage.webp", alt: "Roof repair in Newark: roof with storm damage after the repair is completed" },
  { src: "/images/content/content-consultation-contract.webp", alt: "Homeowner reviewing a written roof repair estimate and contract in Newark" },
  { src: "/images/content/content-consultation-plans.webp", alt: "Roof repair plans reviewed during a consultation in Newark" },
];
