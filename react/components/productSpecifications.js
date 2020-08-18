function ProductSpecifications () {
    return(
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th colSpan="2" className="text-left text-2xl py-3 border-b-2">Specications</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-2">
                        <td className="py-3 border-b-2">Amp Models</td>
                        <td className="py-3 border-b-2 text-right">200</td>
                    </tr> 
                    <tr>
                        <td className="py-3 border-b-2">Effects Loop</td>
                        <td className="py-3 border-b-2 text-right">Yes</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b-2">Inputs</td>
                        <td className="py-3 border-b-2 text-right">2 x 1/4"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b-2">Outputs</td>
                        <td className="py-3 border-b-2 text-right">1 x 1x4", 2 x XLR, 2 x 1/4"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b-2">MIDI I/O</td>
                        <td className="py-3 border-b-2 text-right">In/Out/Thru</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b-2">Height</td>
                        <td className="py-3 border-b-2 text-right">8.54"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b-2">Width</td>
                        <td className="py-3 border-b-2 text-right">14.88"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b-2">Depth</td>
                        <td className="py-3 border-b-2 text-right">6.81"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b-2">Weight</td>
                        <td className="py-3 border-b-2 text-right">11.73 lbs</td>
                    </tr>
                </tbody>  
            </table>
        </div>
    );
}

export default ProductSpecifications;