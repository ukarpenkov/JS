import React from 'react';
import { connect } from 'react-redux';
import BookListItem from '../bookListItem/bookListItem';
import withBookStoreService from '../hoc/withBookStoreService';
import Spinner from './../spinner/spinner'
import './bookList.css'
import { fetchBooks, bookAddedToCart } from '../../actions/index'
import ErrorIndicator from '../errorIndicator/errorIndicator';
import { compose } from 'redux';


const BookList = ({ books, onAddedToCart }) => {

    return (
        <ul className='book-list'>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book}
                            onAddedToCart={() => onAddedToCart(book.id)}
                        /></li>
                    )
                })
            }
        </ul>
    )

}

class BookListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <BookList books={books}
            onAddedToCart={onAddedToCart}
        />

    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return {
        books,
        loading,
        error
    }
}



const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: () => dispatch(fetchBooks(bookstoreService)()),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
    }
}




export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)