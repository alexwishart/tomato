import { TabInfo } from '../types/contentTypes';
import { processTomatoCitations } from '../utils/contentUtils';

const citationUrlRoot = 'https://en.wikipedia.org/wiki/Tomato#cite_note-';

export const tomatoTabs: TabInfo[] = [
  {
    title: 'Nutrition',
    content: processTomatoCitations(
      "Tomatoes are now eaten freely throughout the world. They contain the carotene lycopene, one of the most powerful natural antioxidants. In some studies, lycopene, especially in cooked tomatoes, has been found to help prevent prostate cancer,[36] but other research contradicts this claim.[37] Lycopene has also been shown to improve the skin's ability to protect against harmful UV rays.[38] A study done by researchers at Manchester and Newcastle universities revealed that tomato can protect against sunburn and help keeping the skin looking youthful.[39] Natural genetic variation in tomatoes and their wild relatives has given a genetic plethora of genes that produce lycopene, carotene, anthocyanin, and other antioxidants. Tomato varieties are available with double the normal vitamin C (Doublerich), 40 times normal vitamin A(97L97), high levels of anthocyanin (resulting in blue tomatoes), and two to four times the normal amount of lycopene (numerous available cultivars with the high crimson gene).",
      citationUrlRoot
    ),
  },
  {
    title: 'Health benefits',
    content: processTomatoCitations(
      'Lycopene has also been shown to protect against oxidative damage in many epidemiological and experimental studies. In addition to its antioxidant activity, other metabolic effects of lycopene have also been demonstrated. The richest source of lycopene in the diet is tomato and tomato derived products.[40] Tomato consumption has been associated with decreased risk of breast cancer,[41] head and neck cancers[42] and might be strongly protective against neurodegenerative diseases.[43][44][45] Tomatoes, tomato sauces and puree are said to help lower urinary tract symptoms (BPH) and may have anticancer properties.[46] Tomato consumption might be beneficial for reducing cardiovascular risk associated with type 2 diabetes.[47]',
      citationUrlRoot
    ),
  },
  {
    title: 'Storage',
    content: processTomatoCitations(
      'Tomatoes keep best unwashed at room temperature and out of direct sunlight. It is not recommended to refrigerate as this can harm the flavor.[48] Tomatoes that are not yet ripe can be kept in a paper bag till ripening.[49] Storing stem down can prolong shelf life.[50]',
      citationUrlRoot
    ),
  },
];
