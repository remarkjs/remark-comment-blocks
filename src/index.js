import trimRight from 'trim-right';

export default function (remark, opts) {
    const Compiler = remark.Compiler;

    const {start, middle, end} = {
        start:  '/**\n',
        middle: ' * ',
        end:  '\n */\n',
        ...opts
    };

    class CommentBlockCompiler extends Compiler {
        root (node) {
            let markdown = super.root(node);
            return start + markdown.split('\n').slice(0, -1).map(line => {
                return line.length ? `${middle}${line}` : trimRight(middle);
            }).join('\n') + end;
        }
    }

    remark.Compiler = CommentBlockCompiler;
};
