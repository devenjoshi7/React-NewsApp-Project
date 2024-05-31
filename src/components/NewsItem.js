import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl, author, date } = this.props;
        return (
            <div className='my-2'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imgUrl ? imgUrl : "https://www.livemint.com/lm-img/img/2024/05/21/1600x900/stock_1716310652236_1716310652442.jpg"} className="card-img-top" alt="..." height={200} width={200} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"> <small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small> </p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem