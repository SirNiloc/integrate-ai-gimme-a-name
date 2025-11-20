/**
 * @module GimmeAName
 * @namespace GimmeAName - A module for generating names for various elements in FoundryVTT campaigns.
 * @description This module utilizes an AI model to generate names for NPCs, monsters, items, locations, organizations, and more.
 *  It provides a flexible interface for generating names with customizable parameters such as the number of names, additional descriptions, and excluded names.
 */
class GimmeAName {

    /**
     * @private
     * @function generateName
     * @param {string} prompt - The prompt to send to the AI model.
     * @returns {Promise<string[]>} - A promise that resolves to an array of strings, representing the generated names.
     * @description This function sends a prompt to the AI model and parses the response to extract the generated names.
     */
    static async generateName(prompt) {
        var result = await (IntegrateAI.processWithAI(prompt))
        var content = result.content

        return content.split('\n').filter(Boolean).map(name => name.trim());
    }

    /**
     * @private
     * @function generateNPCNames
     * @param {number} numNames - The number of NPC names to generate (default: 1).
     * @param {string} additionalDescription - An optional additional description to include in the prompt.
     * @param {string[]} examples - An array of example names to guide the AI.
     * @param {string[]} excludedNames - An array of names to exclude from the generated names.
     * @returns {Promise<string[]>} - A promise that resolves to an array of strings, representing the generated NPC names.
     * @description Generates a list of unique NPC names suitable for a tabletop role-playing game.
     */
    static async generateNPCNames(numNames = 1, additionalDescription = "", examples = ["Gelreth Smithson", "Torvin Stonebeard", "Lysandra Moonwhisper"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for NPCs suitable for a ttrpg, Do not include any other text, or descriptions. Just the full name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    /**
     * @private
     * @function generateMonsterNames
     * @param {number} numNames - The number of monster names to generate (default: 1).
     * @param {string} additionalDescription - An optional additional description to include in the prompt.
     * @param {string[]} examples - An array of example names to guide the AI.
     * @param {string[]} excludedNames - An array of names to exclude from the generated names.
     * @returns {Promise<string[]>} - A promise that resolves to an array of strings, representing the generated monster names.
     * @description Generates a list of unique monster names suitable for a tabletop role-playing game.
     */
    static async generateMonsterNames(numNames = 1, additionalDescription = "", examples = ["Shadowfang", "Grimclaw", "Venomstrike"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for monsters suitable for a ttrpg, Do not include any other text, or descriptions. Just the monster name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    /**
     * @private
     * @function generateItemNames
     * @param {number} numNames - The number of item names to generate (default: 1).
     * @param {string} additionalDescription - An optional additional description to include in the prompt.
     * @param {string[]} examples - An array of example names to guide the AI.
     * @param {string[]} excludedNames - An array of names to exclude from the generated names.
     * @returns {Promise<string[]>} - A promise that resolves to an array of strings, representing the generated item names.
     * @description Generates a list of unique item names suitable for a tabletop role-playing game.
     */
    static async generateItemNames(numNames = 1, additionalDescription = "", examples = ["Dragonscale", "Runestone", "Shadowsteel"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for items suitable for a ttrpg, Do not include any other text, or descriptions. Just the item name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    /**
     * @private
     * @function generateMagicNames
     * @param {number} numNames - The number of magic names to generate (default: 1).
     * @param {string} additionalDescription - An optional additional description to include in the prompt.
     * @param {string[]} examples - An array of example names to guide the AI.
     * @param {string[]} excludedNames - An array of names to exclude from the generated names.
     * @returns {Promise<string[]>} - A promise that resolves to an array of strings, representing the generated magic names.
     * @description Generates a list of unique magic names suitable for a tabletop role-playing game.
     */
    static async generateMagicNames(numNames = 1, additionalDescription = "", examples = ["Arcanebolt", "Shadowweave", "Frostshard"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for magic spells and items suitable for a ttrpg, Do not include any other text, or descriptions. Just the magic name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    /**
     * @private
     * @function generateLocationNames
     * @param {number} numNames - The number of location names to generate (default: 1).
     * @param {string} additionalDescription - An optional additional description to include in the prompt.
     * @param {string[]} examples - An array of example names to guide the AI.
     * @param {string[]} excludedNames - An array of names to exclude from the generated names.
     * @returns {Promise<string[]>} - A promise that resolves to an array of strings, representing the generated location names.
     * @description Generates a list of unique location names suitable for a tabletop role-playing game.
     */
    static async generateLocationNames(numNames = 1, additionalDescription = "", examples = ["Silverwood", "Grimstone", "Moonhaven"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for locations suitable for a ttrpg (ฤษ cities, towns, dungeons, etc.), Do not include any other text, or descriptions. Just the location name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    /**
     * @private
     * @function generateNationNames
     * @param {number} numNames - The number of nation names to generate (default: 1).
     * @param {string} additionalDescription - An optional additional description to include in the prompt.
     * @param {string[]} examples - An array of example names to guide the AI.
     * @param {string[]} excludedNames - An array of names to exclude from the generated names.
     * @returns {Promise<string[]>} - A promise that resolves to an array of strings, representing the generated nation names.
     * @description Generates a list of unique nation names suitable for a tabletop role-playing game.
     */
    static async generateNationNames(numNames = 1, additionalDescription = "", examples = ["The Iron Legion", "Kingdom of Rust", "The Emerald Concord", "Aern Empire"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for nations suitable for a ttrpg, Do not include any other text, or descriptions. Just the nation name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    /**
     * @private
     * @function generateCityNames
     * @param {number} numNames - The number of city names to generate (default: 1).
     * @param {string} additionalDescription - An optional additional description to include in the prompt.
     * @param {string[]} examples - An array of example names to guide the AI.
     * @param {string[]} excludedNames - An array of names to exclude from the generated names.
     * @returns {Promise<string[]>} - A promise that resolves to an array of strings, representing the generated city names.
     * @description Generates a list of unique city names suitable for a tabletop role-playing game.
     */
    static async generateCityNames(numNames = 1, additionalDescription = "", examples = ["Silverhaven", "Blackstone", "Riverbend"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for cities suitable for a ttrpg, Do not include any other text, or descriptions. Just the city name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    /**
     * @private
     * @function generateOrganizationNames
     * @param {number} numNames - The number of organization names to generate (default: 1).
     * @param {string} additionalDescription - An optional additional description to include in the prompt.
     * @param {string[]} examples - An array of example names to guide the AI.
     * @param {string[]} excludedNames - An array of names to exclude from the generated names.
     * @returns {Promise<string[]>} - A promise that resolves to an array of strings, representing the generated organization names.
     * @description Generates a list of unique organization names suitable for a tabletop role-playing game.
     */
    static async generateOrganizationNames(numNames = 1, additionalDescription = "", examples = ["The Crimson Guard", "The Silent Order", "The Shadow Syndicate"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for organizations suitable for a ttrpg, Do not include any other text, or descriptions. Just the organization name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }
}
