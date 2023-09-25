import {NCS} from './color-fans/sigma-NCS';
import {RAL, RAL_SUBSET_SIGMAFLOOR} from './color-fans/RAL';
import {VOICE_OF_COLOUR} from './color-fans/sigma-voice-of-colour';
import {WOOD_PROTECT} from './color-fans/sigma-woodprotect';
import {Paint} from '../types/paint';
import {SILOXAN} from './color-fans/siloxan';

const SIGMA_BASE = [...RAL, ...NCS, ...VOICE_OF_COLOUR];

// Exception: paints with `siloxan` should additionally use the siloxan list
const SILOXAN_BASE = [...SILOXAN, ...SIGMA_BASE];

export const PAINTS: Paint[] = [
  // Primers binnenmuren
  {
    'name': 'sigma multiprimer aqua',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma wallprimer plus',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma wallprim',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigmacryl prim opaque',
    'colorList': SIGMA_BASE,
  },
  // Primers buitengevels
  {
    'name': 'sigma siloxan filler',
    'colorList': SILOXAN_BASE,
  },
  {
    'name': 'sigma multiprimer',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma siloxan prim',
    'colorList': SILOXAN_BASE,
  },
  {
    'name': 'sigma facade prim aqua',
    'colorList': SIGMA_BASE,
  },
  // Primers hout binnen en buiten
  {
    'name': 'sigma amarol primer',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma torno aqua primer',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma rapid primer',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron primer',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron aqua primer',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron aqua spray primer',
    'colorList': SIGMA_BASE,
  },
  // Afwerking binnenmuren
  {
    'name': 'sigma perfect matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma kwarts matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigmacryl decor satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma colour tester',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigmaresist fungi matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigmaresist immun matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigmacryl decor soft satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma superlatex matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma air pure supermatt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma pearl plafond supermatt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma pearl clean satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma stainaway matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma renomat matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigmacryl decor matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma pearl clean matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma perfect semi-matt',
    'colorList': SIGMA_BASE,
  },
  // Afwerking buitengevels
  {
    'name': 'sigma siloxan quartz matt',
    'colorList': SILOXAN_BASE,
  },
  {
    'name': 'sigma siloxan flex matt',
    'colorList': SILOXAN_BASE,
  },
  {
    'name': 'sigma facade flex matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma facade quartz matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma facade topcoat selfclean matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma facade topcoat ecoplus soft satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma facade topcoat matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma facade coat matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma facade topcoat satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma siloxan matt',
    'colorList': SILOXAN_BASE,
  },
  // Afwerking hout binnen en buiten
  {
    'name': 'sigma torno aqua SGL',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron aqua spray matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron aqua spray satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma torno aqua satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma rapid satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma rapid gloss',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron aqua gloss',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma amarol triol aqua satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron soft satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron aqua matt',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron aqua satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron extreme satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma amarol triol satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron satin',
    'colorList': SIGMA_BASE,
  },
  {
    'name': 'sigma tigron gloss',
    'colorList': SIGMA_BASE,
  },
  // Metaalverf
  {
    'name': 'sigmetal neofer decor semi-gloss',
    'colorList': NCS,
  },
  // Vloer gamma
  {
    'name': 'sigmafloor aqua 2k satin',
    'colorList': RAL_SUBSET_SIGMAFLOOR,
  },
  {
    'name': 'sigmafloor aqua satin',
    'colorList': RAL_SUBSET_SIGMAFLOOR,
  },
  {
    'name': 'sigmafloor satin',
    'colorList': RAL_SUBSET_SIGMAFLOOR,
  },
  // Woodprotect gamma
  {
    'name': 'sigma woodprotect 2in1 matt',
    'colorList': WOOD_PROTECT,
  },
  {
    'name': 'sigma woodprotect 2in1 classic satin',
    'colorList': WOOD_PROTECT,
  },
  {
    'name': 'sigma woodprotect gloss',
    'colorList': WOOD_PROTECT,
  },
  {
    'name': 'sigma woodprotect satin',
    'colorList': WOOD_PROTECT,
  },
  {
    'name': 'sigma woodprotect ultra',
    'colorList': WOOD_PROTECT,
  },
  {
    'name': 'sigma woodprotect solid',
    'colorList': SIGMA_BASE, //exception, should not use WOOD_PROTECT
  },
];
