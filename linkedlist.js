// Node class to create nodes of the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class to handle linked list operations
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Function to add a new node to the linked list
    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Function to reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    // Function to find the second largest number in the linked list
    findSecondLargest() {
        let firstMax = Number.MIN_SAFE_INTEGER;
        let secondMax = Number.MIN_SAFE_INTEGER;

        let current = this.head;

        while (current !== null) {
            if (current.data > firstMax) {
                secondMax = firstMax;
                firstMax = current.data;
            } else if (current.data > secondMax && current.data !== firstMax) {
                secondMax = current.data;
            }
            current = current.next;
        }

        return secondMax;
    }
}

// Function to take user input and perform operations on the linked list
function operateLinkedList() {
    const linkedList = new LinkedList();
    const numbers = []; // Store entered numbers for convenience

    // Take input from the user
    const numNodes = parseInt(prompt("Enter the number of nodes:"));

    for (let i = 0; i < numNodes; i++) {
        const data = parseInt(prompt(`Enter element ${i + 1}:`));
        numbers.push(data);
        linkedList.addNode(data);
    }

    // Reverse the linked list
    linkedList.reverse();

    // Find the second largest number
    const secondLargest = linkedList.findSecondLargest();

    // Display reversed linked list
    console.log("Reversed Linked List:");
    let current = linkedList.head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }

    // Display the second largest number
    console.log(`Second Largest Number: ${secondLargest}`);

    return {
        reversedList: linkedList,
        secondLargest: secondLargest,
        enteredNumbers: numbers,
    };
}

// Run the operations on the linked list
operateLinkedList();
