import React from 'react';
 
export default class ReadingList extends React.Component {
  render (){
    return (
      <>
        <div className="book-container">
          {this.props.bookData.map((data, key) => {
            return (
              <div key={key}>
                <Book
                    key={key}
                    title={data.title}
                    author={data.author}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

const Book = ({ title, author}) => {
  if (!title) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td className='book-author'>
            <p>{author} |</p>
          </td>
          <td className='book-title'>
            <p>{title}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
