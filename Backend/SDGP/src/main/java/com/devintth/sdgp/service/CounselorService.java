package com.devintth.sdgp.service;

import com.devintth.sdgp.model.Counselor;
import com.devintth.sdgp.repository.CounselorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CounselorService {

    @Autowired
    private CounselorRepository counselorRepository;

    // Fetch only pending counselors
    public List<Counselor> getPendingCounselors() {
        return counselorRepository.findByStatus("Pending");
    }

    // Approve a counselor (update status & assign counselor ID)
    public Counselor approveCounselor(String id) {
        Optional<Counselor> counselorOpt = counselorRepository.findById(id);
        if (counselorOpt.isPresent()) {
            Counselor counselor = counselorOpt.get();
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


