// =======================
// ELEMENTS
// =======================
const modalTitle = document.getElementById("modalTitle");
const studentForm = document.getElementById("studentForm");
const studentModal = document.getElementById("studentModal");
const searchPanel = document.getElementById("searchPanel");

// =======================
// MODAL FUNCTIONS
// =======================

// Open Add Student
function openAddStudentModal() {
    modalTitle.textContent = "Add New Student";
    studentForm.reset();
    studentModal.classList.remove("hidden");
}

// Close Modal
function closeStudentModal() {
    studentModal.classList.add("hidden");
}

// =======================
// SEARCH PANEL
// =======================

function toggleSearchPanel() {
    searchPanel.classList.toggle("hidden");
}

// =======================
// FORM SUBMIT
// =======================

studentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const code = document.getElementById("studentCode").value;
    const name = document.getElementById("studentName").value;
    const firstName = document.getElementById("studentFirstName").value;

    console.log("Student added:", code, name, firstName);

    showNotification("Student saved successfully!");
    closeStudentModal();
});

// =======================
// EDIT / DELETE (demo)
// =======================

function editStudent(code) {
    modalTitle.textContent = "Edit Student";
    studentModal.classList.remove("hidden");

    console.log("Editing student:", code);
}

function deleteStudent(code) {
    if (confirm("Are you sure you want to delete this student?")) {
        console.log("Deleted student:", code);
        showNotification("Student deleted!");
    }
}

// =======================
// SEARCH
// =======================

function searchStudents() {
    const value = document.getElementById("searchInput").value;
    console.log("Searching:", value);
}

// =======================
// NOTIFICATIONS
// =======================

function showNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.className = "notification";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// =======================
// CLOSE MODAL ON OUTSIDE CLICK
// =======================

window.onclick = function (e) {
    if (e.target === studentModal) {
        closeStudentModal();
    }
};

// =======================
// ACTIVE NAV LINK
// =======================

const navLinks = document.querySelectorAll(".navbar-nav a");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});