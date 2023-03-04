export default function Result({ result }) {
    return (
        <div className="text-white spaced-paragraphs" dangerouslySetInnerHTML={{__html: result}} />
    )
}