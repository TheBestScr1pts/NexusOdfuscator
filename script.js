document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),t=document.getElementById("resetBtn"),n=document.getElementById("luaInput"),l=document.getElementById("luaOutput");function r(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function a(e){let t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="_";for(let l=0;l<e;l++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function o(e){let t=e,n={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let l in n){let r=RegExp(l,"g");t=t.replace(r,n[l])}return t}function c(e){if(!e.trim())return"";let t=Math.floor(100*Math.random())+30,n="";for(let l=0;l<e.length;l++){let o=e.charCodeAt(l)+t,c=r(),i=Math.floor(3*Math.random());0===i?n+="/"+o+c:1===i?n+="/"+c+o:n+="/"+o.toString().slice(0,1)+c+o.toString().slice(1),l<e.length-1&&(n+=",")}let d=a(8),u=a(9),f=a(6),g=a(9),m=a(6),s=a(7),h=`-- NexusOdfucator
`;return h+=`local ${d} = {loadstring, string.char, string.gmatch, string.match, tonumber}
`,h+=`local ${u} = "${n}"
`,h+=`local ${f} = ${t}
`,h+=`local ${g} = ""
`,h+=`for ${m} in ${d}[3](${u}, "[^,]+") do
`,h+=`    local n = ${d}[4](${m}, "%d+")
`,h+=`    if n then ${g} = ${g} .. ${d}[2](${d}[5](n) - ${f}) end
`,h+=`end
`,h+=`local ${s} = ${d}[1](${g})
`,h+=`if ${s} then ${s}() end`}e.addEventListener("click",()=>{l.value=c(n.value)}),t.addEventListener("click",()=>{n.value="",l.value=""})});
