package com.devintth.sdgp.services;

import com.devintth.sdgp.model.Admin;
import com.devintth.sdgp.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CounselorService {

    @Autowired
    private AdminRepository counselorRepository;

    // Fetch only pending counselors
    public List<Admin> getPendingCounselors() {
        return counselorRepository.findByStatus("Pending");
    }

    // Approve a counselor (update status & assign counselor ID)
    public Admin approveCounselor(String id) {
        Optional<Admin> counselorOpt = counselorRepository.findById(id);
        if (counselorOpt.isPresent()) {
            Admin counselor = counselorOpt.get();
            counselor.setStatus("Approved");
            counselor.setCounselorId("CNSLR-" + id); // Assign counselor ID
            return counselorRepository.save(counselor);
        }
        throw new RuntimeException("Counselor not found with id: " + id);
    }

    // Reject and delete a counselor
    public void rejectCounselor(String id) {
        if (counselorRepository.existsById(id)) {
            counselorRepository.deleteById(id);
        } else {
            throw new RuntimeException("Counselor not found with id: " + id);
        }
    }
}


