import ReactMarkdown from 'react-markdown';
import { FunctionComponent } from 'react';
import { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm'

interface IProps {
    content: string;
}

const Markdown: FunctionComponent<IProps> = ({content}) => {
    const components: Partial<Components> = {
        code({node, inline, className, children, ...props}) {
            
            return <code className={className ? className : ""} {...props}>
                {children}
            </code>;
        }
    }

    return <div className="markdown-body">
        <ReactMarkdown className="prose prose-indigo prose-lg text-gray-500 mx-auto" components={components} children={content}  remarkPlugins={[remarkGfm]}  />
    </div>
}

export default Markdown;