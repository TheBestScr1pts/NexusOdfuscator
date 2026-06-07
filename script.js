document.addEventListener("DOMContentLoaded", () => {
    const obfuscateBtn = document.getElementById("obfuscateBtn");
    const resetBtn = document.getElementById("resetBtn");
    const luaInput = document.getElementById("luaInput");
    const luaOutput = document.getElementById("luaOutput");

    function getRandomJunkChar() {
        const junk = "abcdefghijklmnopqrstuvwxyz";
        return junk.charAt(Math.floor(Math.random() * junk.length));
    }

    function generateRandomName(length) {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "_";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    function obfuscateEngine(originalCode) {
        if (!originalCode.trim()) return "-- Error";

        const cryptoKey = Math.floor(Math.random() * 100) + 30; 
        let dynamicStream = "";

        for (let i = 0; i < originalCode.length; i++) {
            dynamicStream += (originalCode.charCodeAt(i) + cryptoKey) + getRandomJunkChar() + (i < originalCode.length - 1 ? "," : "");
        }

        const tableVar = generateRandomName(7);
        const envVar = generateRandomName(6);
        const streamVar = generateRandomName(8);
        const keyVar = generateRandomName(5);
        const cleanStrVar = generateRandomName(8);
        const blockVar = generateRandomName(5);
        const cleanNumVar = generateRandomName(6);
        const executeVar = generateRandomName(6);
        const errorVar = generateRandomName(6);

        let output = `-- NexusOdfucator\n`;
        output += `local ${tableVar} = {[1]=loadstring,[2]=setfenv,[3]=error,[4]=getfenv,[5]=string.char,[6]=string.gmatch,[7]=string.match}\n`;
        output += `local ${envVar} = setmetatable({},{__index=function(t,k) if ${tableVar}[k] then return ${tableVar}[k] end return _G[k] or ${tableVar}[4]()[k] end,__newindex=function(t,k,v) ${tableVar}[3]("Error") end,__metatable="NexusOdfucator"})\n`;
        output += `local ${streamVar}="${dynamicStream}" local ${keyVar}=${cryptoKey} local ${cleanStrVar}=""\n`;
        output += `for ${blockVar} in ${tableVar}[6](${streamVar}, "([^,]+)") do\n`;
        output += `local ${cleanNumVar}=tonumber(${tableVar}[7](${blockVar}, "%d+"))\n`;
        output += `if ${cleanNumVar} then ${cleanStrVar}=${cleanStrVar}..${tableVar}[5](${cleanNumVar}-${keyVar}) end\n`;
        output += `end\n`;
        output += `local ${executeVar},${errorVar}=${envVar}[1](${cleanStrVar})\n`;
        output += `if ${executeVar} then ${envVar}[2](${executeVar},${envVar}) ${executeVar}() else ${envVar}[3](tostring(${errorVar})) end`;
        
        return output;
    }

    obfuscateBtn.addEventListener("click", () => {
        luaOutput.value = obfuscateEngine(luaInput.value);
    });

    resetBtn.addEventListener("click", () => {
        luaInput.value = "";
        luaOutput.value = "";
    });
});
