// Assuming IntegrateAI.js is already loaded and accessible in your game environment.

class GimmeAName {

    static async generateName(prompt) {
        console.log("Gen Name")
        var result = await (IntegrateAI.processWithAI(prompt))
        console.log(result)

        return result.split('\n').filter(Boolean).map(name => name.trim());
    }

    static async generateNPCNames(numNames = 1, additionalDescription = "", examples = ["Gelreth Smithson", "Torvin Stonebeard", "Lysandra Moonwhisper"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for NPCs suitable for a ttrpg, Do not include any other text, or descriptions. Just the full name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    static async generateMonsterNames(numNames = 1, additionalDescription = "", examples = ["Shadowfang", "Grimclaw", "Venomstrike"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for monsters suitable for a ttrpg, Do not include any other text, or descriptions. Just the monster name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    static async generateItemNames(numNames = 1, additionalDescription = "", examples = ["Dragonscale", "Runestone", "Shadowsteel"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for items suitable for a ttrpg, Do not include any other text, or descriptions. Just the item name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    static async generateMagicNames(numNames = 1, additionalDescription = "", examples = ["Arcanebolt", "Shadowweave", "Frostshard"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for magic spells and items suitable for a ttrpg, Do not include any other text, or descriptions. Just the magic name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    static async generateLocationNames(numNames = 1, additionalDescription = "", examples = ["Silverwood", "Grimstone", "Moonhaven"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for locations suitable for a ttrpg (ฤษ cities, towns, dungeons, etc.), Do not include any other text, or descriptions. Just the location name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    static async generateNationNames(numNames = 1, additionalDescription = "", examples = ["The Iron Legion", "Kingdom of Rust", "The Emerald Concord", "Aern Empire"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for nations suitable for a ttrpg, Do not include any other text, or descriptions. Just the nation name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    static async generateCityNames(numNames = 1, additionalDescription = "", examples = ["Riverbend", "Stonebridge", "Shadowgate"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for settlements/citiies/towns suitable for a ttrpg, Do not include any other text, or descriptions. Just the settlement name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }

    static async generateOrganizationNames(numNames = 1, additionalDescription = "", examples = ["The Crimson Hand", "The Silent Watch", "The Obsidian Guard"], excludedNames = []) {
        const prompt = `Generate ${numNames} unique names for organizations suitable for a ttrpg, Do not include any other text, or descriptions. Just the organization name. ${additionalDescription}. Examples: ${examples.join(', ')} Do not include: ${excludedNames.join(', ')}.`;
        return this.generateName(prompt);
    }
}
