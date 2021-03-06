import {Select} from "https://deno.land/x/cliffy/prompt/select.ts";
import {Language} from "../models/translation-view.ts";

export default class PromptService {
    /**
     * Ask user to select a language.
     * @param languages
     * @param title
     */
    async ask(languages: Language[], title: string) {
        return Select.prompt({
            message: title,
            options: languages.map(item => {
                return {name: item.name, value: item.language}
            })
        });
    }
}