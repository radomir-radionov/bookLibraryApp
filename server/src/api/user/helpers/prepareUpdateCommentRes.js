const prepareUpdateCommentRes = (paylaod) => {
  const {id, ...data} = paylaod

  return {commentId: id, data: {...data}}
}

export default prepareUpdateCommentRes
