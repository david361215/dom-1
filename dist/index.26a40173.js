window.dom = {
    create (string) {
        let container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after (node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before (node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append (parent, child) {
        parent.appendChild(child);
    },
    wrap (child, parent) {
        dom.before(child, parent);
        dom.append(parent, child);
    },
    remove (node) {
        return node.parentNode.removeChild(node);
    },
    empty (node) {
        let arr = [];
        while(node.firstChild)arr.push(dom.remove(node.firstChild));
        return arr;
    },
    attr (node, name, value) {
        if (arguments.length === 3) node.setAttribute(name, value);
        else if (arguments.length === 2) return node.getAttribute(name);
    },
    text (node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) node.innerText = string;
            else node.textContent = string;
        } else if (arguments.length === 1) {
            if ('innerText' in node) return node.innerText;
            else return node.textContent;
        }
    },
    html (node, string) {
        if (arguments.length === 2) node.innerHTML = string;
        else if (arguments.length === 1) return node.innerHTML;
    },
    style (node, name, value) {
        if (arguments.length === 3) node.style[name] = value;
        else if (arguments.length === 2) {
            if (typeof name === 'string') return node.style[name];
            else if (name instanceof Object) for(let key in name)node.style[key] = name[key];
        }
    },
    class: {
        add (node, className) {
            node.classList.add(className);
        },
        remove (node, className) {
            node.classList.remove(className);
        },
        has (node, className) {
            return node.classList.contains(className);
        }
    },
    on (node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    off (node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    find (selector, node) {
        return (node || document).querySelectorAll(selector);
    },
    parent (node) {
        return node.parentNode;
    },
    children (node) {
        return node.children;
    },
    siblings (node) {
        return Array.from(node.parentNode.children).filter((n)=>n !== node
        );
    },
    next (node) {
        let x = node.nextSibling;
        while(x && x.nodeType === 3)x = x.nextSibling;
        return x;
    },
    previous (node) {
        let x = node.previousSibling;
        while(x && x.nodeType === 3)x = x.previousSibling;
        return x;
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    },
    index (node) {
        let siblings = dom.children(node.parentNode);
        let i;
        for(i = 0; i < siblings.length; i++){
            if (siblings[i] === node) break;
        }
        return i;
    }
};

//# sourceMappingURL=index.26a40173.js.map
