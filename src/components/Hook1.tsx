import React, { useState } from "react";

export default function Hook1({...props}) {
    return (
        <div>
            这是一个子组件: {props.name}
        </div>
    )
}