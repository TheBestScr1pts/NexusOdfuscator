document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("obfuscateBtn"),n=document.getElementById("resetBtn"),t=document.getElementById("luaInput"),l=document.getElementById("luaOutput");function r(){let e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function a(e){let n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="_";for(let l=0;l<e;l++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function o(e){let n=e,t={print:"NX[0x1]",warn:"NX[0x2]","task.wait":"NX[0x3]","Instance.new":"NX[0x4]","game:GetService":"NX[0x5]","CFrame.new":"NX[0x6]"};for(let l in t){let r=RegExp(l,"g");n=n.replace(r,t[l])}return n}function c(e){if(!e.trim())return"";let n=Math.floor(100*Math.random())+30,t="";for(let l=0;l<e.length;l++){let o=(e.charCodeAt(l)+n).toString(),c=r(),d=Math.floor(Math.random()*(o.length+1));t+="/"+(o.slice(0,d)+c+o.slice(d)),l<e.length-1&&(t+=",")}let i=a(8),u=a(9),f=a(6),g=a(9),h=a(6),m=a(7),s=`-- NexusOdfucator
`;return s+=`local ${i} = {loadstring, string.char, string.gmatch, string.match, tonumber}
`,s+=`local ${u} = "${t}"
`,s+=`local ${f} = ${n}
`,s+=`local ${g} = ""
`,s+=`for ${h} in ${i}[3](${u}, "[^,]+") do
`,s+=`    local n = ${i}[4](${h}, "%d+")
`,s+=`    if n then local val = ${i}[5](n) - ${f} if val >= 0 and val <= 255 then ${g} = ${g} .. ${i}[2](val) end end
`,s+=`end
`,s+=`local ${m} = ${i}[1](${g})
`,s+=`if ${m} then ${m}() end`}e.addEventListener("click",()=>{l.value=c(t.value)}),n.addEventListener("click",()=>{t.value="",l.value=""})});
