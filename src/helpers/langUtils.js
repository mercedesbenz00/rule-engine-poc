import { lange_en } from './lang/lang-en';
import { lang_zh } from './lang/lang-zh';

class LangUtils {

    static getLanguage(lang, code)
    {
        var codes = null
        if (lang === "en")
        {
            codes = lange_en
        }
        else
        {
            codes = lang_zh
        }

        var subCodes = code.split(".");

        for(var i = 0 ; i < subCodes.length ; i++) {
            var sc = subCodes[i]
            if (codes[sc])
                codes = codes[sc];
            else
                return code
        }

        return codes
    }

}

export default LangUtils;