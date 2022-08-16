import PropTypes from 'prop-types'

export default function ItemsList({ items }) {

    return (
        <>
            <p className="items">Items</p>
            <ol className="item-list">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ol>
        </>
    )
}

ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}