module.exports = [
"[project]/components/markdown-renderer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkdownRenderer",
    ()=>MarkdownRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function MarkdownRenderer({ content }) {
    const [html, setHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const parseMarkdown = (markdown)=>{
            let result = markdown;
            // Code blocks with language
            result = result.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code)=>{
                const language = lang || "text";
                const highlightedCode = highlightCode(code.trim(), language);
                return `<div class="code-block-wrapper"><div class="code-block-header"><span class="code-block-lang">${language}</span><button class="copy-button" data-code="${encodeURIComponent(code.trim())}">Copy</button></div><pre class="code-block"><code class="language-${language}">${highlightedCode}</code></pre></div>`;
            });
            // Inline code
            result = result.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
            // Headers
            result = result.replace(/^### (.+)$/gm, '<h3 class="md-h3">$1</h3>');
            result = result.replace(/^## (.+)$/gm, '<h2 class="md-h2">$1</h2>');
            result = result.replace(/^# (.+)$/gm, '<h1 class="md-h1">$1</h1>');
            // Blockquotes
            result = result.replace(/^> (.+)$/gm, '<blockquote class="md-blockquote">$1</blockquote>');
            // Bold
            result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
            // Italic
            result = result.replace(/\*([^*]+)\*/g, "<em>$1</em>");
            // Unordered lists
            result = result.replace(/^- (.+)$/gm, '<li class="md-li">$1</li>');
            result = result.replace(/(<li class="md-li">.*<\/li>\n?)+/g, '<ul class="md-ul">$&</ul>');
            // Ordered lists
            result = result.replace(/^\d+\. (.+)$/gm, '<li class="md-oli">$1</li>');
            result = result.replace(/(<li class="md-oli">.*<\/li>\n?)+/g, '<ol class="md-ol">$&</ol>');
            // Links
            result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="md-link">$1</a>');
            // Horizontal rules
            result = result.replace(/^---$/gm, '<hr class="md-hr" />');
            // Paragraphs (wrap remaining text)
            result = result.split("\n\n").map((block)=>{
                if (block.startsWith("<h") || block.startsWith("<ul") || block.startsWith("<ol") || block.startsWith("<blockquote") || block.startsWith("<div") || block.startsWith("<hr") || block.trim() === "") {
                    return block;
                }
                return `<p class="md-p">${block.replace(/\n/g, " ")}</p>`;
            }).join("\n");
            return result;
        };
        const highlightCode = (code, language)=>{
            // For JSX/TSX, we need to be more careful with HTML escaping
            // Only escape characters that aren't part of JSX syntax
            let escaped = code.replace(/&/g, "&amp;")// Don't escape < and > for JSX elements, but escape them in other contexts
            .replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
            // For JSX/TSX languages, restore JSX elements
            if (language === 'tsx' || language === 'jsx') {
                // Restore JSX elements (opening tags)
                escaped = escaped.replace(/&lt;(\/?[a-zA-Z][a-zA-Z0-9]*(?:\s[^&]*?)?)\s*&gt;/g, '<$1>');
                // Restore self-closing JSX elements
                escaped = escaped.replace(/&lt;([a-zA-Z][a-zA-Z0-9]*(?:\s[^&]*?)?)\s*\/\s*&gt;/g, '<$1 />');
                // Restore JSX fragments
                escaped = escaped.replace(/&lt;&gt;/g, '<>');
                escaped = escaped.replace(/&lt;\/&gt;/g, '</>');
            }
            // Keywords for different languages
            const keywords = {
                typescript: [
                    "import",
                    "export",
                    "from",
                    "const",
                    "let",
                    "var",
                    "function",
                    "return",
                    "if",
                    "else",
                    "for",
                    "while",
                    "class",
                    "interface",
                    "type",
                    "extends",
                    "implements",
                    "async",
                    "await",
                    "try",
                    "catch",
                    "throw",
                    "new",
                    "this",
                    "super",
                    "default",
                    "as",
                    "typeof",
                    "keyof",
                    "readonly",
                    "public",
                    "private",
                    "protected",
                    "static"
                ],
                tsx: [
                    "import",
                    "export",
                    "from",
                    "const",
                    "let",
                    "var",
                    "function",
                    "return",
                    "if",
                    "else",
                    "for",
                    "while",
                    "class",
                    "interface",
                    "type",
                    "extends",
                    "implements",
                    "async",
                    "await",
                    "try",
                    "catch",
                    "throw",
                    "new",
                    "this",
                    "super",
                    "default",
                    "as",
                    "typeof",
                    "keyof",
                    "readonly",
                    "public",
                    "private",
                    "protected",
                    "static"
                ],
                jsx: [
                    "import",
                    "export",
                    "from",
                    "const",
                    "let",
                    "var",
                    "function",
                    "return",
                    "if",
                    "else",
                    "for",
                    "while",
                    "class",
                    "extends",
                    "async",
                    "await",
                    "try",
                    "catch",
                    "throw",
                    "new",
                    "this",
                    "super",
                    "default"
                ],
                javascript: [
                    "import",
                    "export",
                    "from",
                    "const",
                    "let",
                    "var",
                    "function",
                    "return",
                    "if",
                    "else",
                    "for",
                    "while",
                    "class",
                    "extends",
                    "async",
                    "await",
                    "try",
                    "catch",
                    "throw",
                    "new",
                    "this",
                    "super",
                    "default"
                ],
                css: [
                    "@import",
                    "@media",
                    "@keyframes",
                    "@font-face",
                    "@supports",
                    "from",
                    "to",
                    "!important"
                ],
                bash: [
                    "npm",
                    "npx",
                    "cd",
                    "git",
                    "mkdir",
                    "touch",
                    "rm",
                    "cp",
                    "mv",
                    "echo",
                    "export"
                ]
            };
            const langKeywords = keywords[language] || keywords["typescript"] || [];
            // Highlight strings (but be careful not to break JSX)
            escaped = escaped.replace(/(["'`])(?:(?!\1)[^\\]|\\.)*\1/g, '<span class="token-string">$&</span>');
            // Highlight comments
            escaped = escaped.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');
            // Highlight keywords
            langKeywords.forEach((keyword)=>{
                const regex = new RegExp(`\\b(${keyword})\\b`, "g");
                escaped = escaped.replace(regex, '<span class="token-keyword">$1</span>');
            });
            // Highlight numbers
            escaped = escaped.replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>');
            // Highlight functions
            escaped = escaped.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="token-function">$1</span>(');
            // Highlight types/classes (PascalCase)
            escaped = escaped.replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="token-type">$1</span>');
            return escaped;
        };
        setHtml(parseMarkdown(content));
    }, [
        content
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleCopy = (e)=>{
            const target = e.target;
            if (target.classList.contains("copy-button")) {
                const code = decodeURIComponent(target.getAttribute("data-code") || "");
                navigator.clipboard.writeText(code);
                target.textContent = "Copied!";
                setTimeout(()=>{
                    target.textContent = "Copy";
                }, 2000);
            }
        };
        document.addEventListener("click", handleCopy);
        return ()=>document.removeEventListener("click", handleCopy);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "markdown-content",
        dangerouslySetInnerHTML: {
            __html: html
        }
    }, void 0, false, {
        fileName: "[project]/components/markdown-renderer.tsx",
        lineNumber: 290,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=components_markdown-renderer_tsx_5e90cf29._.js.map