document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),n=document.getElementById("resetBtn"),t=document.getElementById("luaInput"),l=document.getElementById("luaOutput");function r(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function a(e){let n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="_";for(let l=0;l<e;l++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function o(e){let n=e,t={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let l in t){let r=RegExp(l,"g");n=n.replace(r,t[l])}return n}function c(e){if(!e.trim())return"";let n=Math.floor(100*Math.random())+30,t="";for(let l=0;l<e.length;l++){let o=e.charCodeAt(l)+n,c=r();t+="/"+(Math.random()>.5?c+o:o+c),l<e.length-1&&(t+=",")}let d=a(8),i=a(9),u=a(6),f=a(9),g=a(6),m=a(7),h=`-- NexusOdfucator
`;return h+=`local ${d} = {loadstring, string.char, string.gmatch, string.match, tonumber}
`,h+=`local ${i} = "${t}"
`,h+=`local ${u} = ${n}
`,h+=`local ${f} = ""
`,h+=`for ${g} in ${d}[3](${i}, "[^,]+") do
`,h+=`    local n = ${d}[4](${g}, "%d+")
`,h+=`    if n then ${f} = ${f} .. ${d}[2](${d}[5](n) - ${u}) end
`,h+=`end
`,h+=`local ${m} = ${d}[1](${f})
`,h+=`if ${m} then ${m}() end`}e.addEventListener("click",()=>{l.value=c(t.value)}),n.addEventListener("click",()=>{t.value="",l.value=""})});
