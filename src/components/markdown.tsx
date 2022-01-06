import ReactMarkdown from 'react-markdown';
import { FunctionComponent } from 'react';
import { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface IProps {
    content: string;
}

const Markdown: FunctionComponent<IProps> = ({content}) => {
    const components: Partial<Components> = {
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
    
            return (!inline && match) ? (
                <SyntaxHighlighter PreTag="div" language={match[1]} children={String(children).replace(/\n$/, '')} {...props} />
            ) : (
                <code className={className ? className : ""} {...props}>
                    {children}
                </code>
            )
        }
    }

    return <div className="markdown-body">
        <ReactMarkdown components={components} children={content} />
    </div>
}

export default Markdown;