import { useSelector } from "react-redux/es/exports"
import { selectQuote } from "./quoteSlice"
export function Quote() {
    const quote = useSelector(selectQuote)
    return (
        <div style={{
            //position: 'fixed',
            //bottom: 0,
            //padding: 10,
            marginTop: 50,
            width: '99%',
        }}>
            <h5 
                style={{  
                    textAlign: 'center', 
                    color: 'white',
                }}
                >
                    "{quote.text}"
            </h5>
            <h6
                style={{  
                    textAlign: 'center', 
                    color: 'white',
                }}
            >
                {quote.author}
            </h6>
        </div>
    )
}