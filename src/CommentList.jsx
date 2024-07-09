import Comment from "./Comment";

// PDF 2.62
const comments = [
    { name: "Mike", comment: "안녕하세요." },
    { name: "Steve", comment: "반갑습니다." },
    { name: "Jane", comment: "Hello~" },
];

const temp = [
    <h1>A</h1>, <h1>B</h1>, <h1>C</h1>
];

// PDF 2.54
function CommentList(props) {
    return (
        <div>
            {temp}

            {/* <Comment />
            <Comment />
            <Comment /> */}
            <Comment name="111" comment="aaa" />

            {/* PDF 2.62 */}
            {
                comments.map((value) => {
                    return <Comment name={value.name} comment={value.comment} />
                })
            }
        </div>
    )
}

export default CommentList;