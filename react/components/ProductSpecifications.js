function ProductSpecifications () {
    return(
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th colSpan="2" className="text-left text-2xl py-3 border-b font-normal">Specications</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-3 border-b">Amp Models</td>
                        <td className="py-3 border-b text-right">200</td>
                    </tr> 
                    <tr>
                        <td className="py-3 border-b">Effects Loop</td>
                        <td className="py-3 border-b text-right">Yes</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b">Inputs</td>
                        <td className="py-3 border-b text-right">2 x 1/4"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b">Outputs</td>
                        <td className="py-3 border-b text-right">1 x 1x4", 2 x XLR, 2 x 1/4"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b">MIDI I/O</td>
                        <td className="py-3 border-b text-right">In/Out/Thru</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b">Height</td>
                        <td className="py-3 border-b text-right">8.54"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b">Width</td>
                        <td className="py-3 border-b text-right">14.88"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b">Depth</td>
                        <td className="py-3 border-b text-right">6.81"</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b">Weight</td>
                        <td className="py-3 border-b text-right">11.73 lbs</td>
                    </tr>
                </tbody>  
            </table>
        </div>
    );
}

export default ProductSpecifications;