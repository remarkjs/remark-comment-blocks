import trimRight from 'trim-right';

export default function (remark, opts) {
    const {visitors} = remark.Compiler.prototype;
    const {root} = visitors;

    const {start, middle, end} = {
        start:  '/**\n',
        middle: ' * ',
        end:  '\n */\n',
        ...opts,
    };

    visitors.root = function (node) {
        const markdown = root.call(this, node);
        return start + markdown.split('\n').slice(0, -1).map(line => {
            return line.length ? `${middle}${line}` : trimRight(middle);
        }).join('\n') + end;
    };
}
