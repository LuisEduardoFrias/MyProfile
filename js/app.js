import { mediaQuery, Select } from './tools.js';

import cp_matches   from '../components/component_matches.js';
import cp_unmatches from '../components/component_unmatches.js';

mediaQuery("max-width: 900px", cp_matches, cp_unmatches);