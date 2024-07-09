// PDF 2.56
const styles = {
    wrapper: {
        margin: 8, padding: 8,
        display: "flex", flexDirection: "row",
        border: "1px solid grey", borderRadius: 16,
    },
    image: {
        width: 50, height: 50, borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8, display: "flex",
        flexDirection: "column", justifyContent: "center",
    },
    nameText: {
        color: "black", fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black", fontSize: 16,
    },
}

// // PDF 2.53
// function Comment(props) {
//     return (
//         <div>
//             <h1>컴포넌트</h1>
//         </div>
//     )
// }
// // App.js가 아닌 Comment.jsx를 실행하고 싶을때 index.js 수정

// // PDF 2.57
// function Comment(props) {
//     return (
//         <div style={styles.wrapper}>
//             <div>
//                 <img
//                     src="http://ggoreb.com/images/Portrait_Placeholder.png"
//                     style={styles.image}
//                 />
//             </div>
//             <div style={styles.contentContainer}>
//                 <span style={styles.nameText}>제목</span>
//                 <span style={styles.commentText}>내용</span>
//             </div>
//         </div>
//     )
// }

// PDF 2.58
function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div>
                <img
                    src="http://ggoreb.com/images/Portrait_Placeholder.png"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    )
}

export default Comment;